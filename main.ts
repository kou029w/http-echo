import { serve } from "@hono/node-server";
import { createApp } from "./app.ts";

const app = createApp();

// @ts-ignore: Deno is not defined in Node.js
if (typeof Deno === "undefined") {
  serve(app, ({ port }) => {
    console.log(`Server is running on http://localhost:${port}`);
  });
} else {
  // @ts-ignore: Deno is not defined in Node.js
  Deno.serve(app.fetch);
}
