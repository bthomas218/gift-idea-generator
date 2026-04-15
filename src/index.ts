import config from "./cfg";
import index from "./app/index.html";

Bun.serve({
  port: config.port,
  hostname: config.hostname,

  routes: {
    "/*": index,
  },

  development:
    config.environment === "dev"
      ? {
          hmr: true,
          console: true,
        }
      : false,
});

console.log(`Server running at http://${config.hostname}:${config.port}`);
