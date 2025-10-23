import { createApp } from "./app.ts";

const app = createApp();

Deno.serve(app.fetch);
