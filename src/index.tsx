import { renderToReadableStream } from "react-dom/server";
import App from "./app/app";

Bun.serve({
    port: 3000,
    async fetch(request) {
        
        const stream = await renderToReadableStream(<App />);
        return new Response(stream, {
            headers: {
                "Content-Type": "text/html; charset=utf-8",
            },
        });
    }
})