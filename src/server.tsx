import config from "./cfg";

console.log(`Server running at http://${config.hostname}:${config.port}`);

Bun.serve({
  port: config.port,
  hostname: config.hostname,

  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return new Response(Bun.file(`${__dirname}/app/index.html`));
    }

    if (url.pathname === "/client.js") {
      const result = await Bun.build({
        entrypoints: [`${__dirname}/app/client.tsx`],
        target: "browser",
        format: "esm",
      });

      return new Response(result.outputs[0], {
        headers: {
          "Content-Type": "application/javascript",
        },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});
