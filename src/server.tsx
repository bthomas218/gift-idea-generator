Bun.serve({
  port: 3000,

  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return new Response(Bun.file("./src/index.html"));
    }

    if (url.pathname === "/client.js") {
      const result = await Bun.build({
        entrypoints: ["./src/client.tsx"],
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
