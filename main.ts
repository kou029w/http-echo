import { serve } from "@hono/node-server";
import { createApp } from "./app.ts";

const app = createApp();

serve(app, ({ port }) => {
  console.log(`Server is running on http://localhost:${port}`);
});
