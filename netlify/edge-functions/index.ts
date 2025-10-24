import { handle } from "hono/netlify";
import app from "../../app.ts";

export default handle(app);

export const config = {
  path: "/*",
};
