import { serve } from "@hono/node-server";
import app from "./app.ts";

serve(app, ({ port }) => {
  console.log(`Server is running on http://localhost:${port}`);
});
