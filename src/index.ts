import config from "./cfg";

Bun.serve({
  port: config.port,
  hostname: config.hostname,

  routes: {
    "/*": Bun.file("./app/index.html"),
  },

  development: config.environment === "dev",
});

console.log(`Server running at http://${config.hostname}:${config.port}`);
