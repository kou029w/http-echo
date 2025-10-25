import { serve } from "@hono/node-server";
import app from "./app.ts";

serve(
  {
    fetch: app.fetch,
    port: Number(process.env.PORT || 8080),
  },
  ({ port }) => {
    console.log(`Server is running on http://localhost:${port}`);
  },
);
