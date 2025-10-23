import { Hono } from "hono";

export function createApp() {
  const app = new Hono();

  app.all("*", async (c) => {
    const headers: Record<string, string> = {};
    c.req.raw.headers.forEach((value, key) => {
      headers[key] = value;
    });

    let body = null;

    try {
      switch (c.req.header("content-type")?.split(";")[0].trim()) {
        case "application/json":
          body = await c.req.json();
          break;
        case "application/x-www-form-urlencoded":
          body = await c.req.parseBody();
          break;
        default:
          body = await c.req.text();
      }
    } catch {
      body = await c.req.text();
    }

    return c.json(
      {
        method: c.req.method,
        url: c.req.url,
        path: c.req.path,
        query: c.req.query(),
        headers,
        body,
      },
      200,
    );
  });

  return app;
}
