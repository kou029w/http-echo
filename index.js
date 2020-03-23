const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.raw({ type: "*/*" }));
app.all("/*", function(req, res) {
  app.set("json spaces", req.path === "/pretty" ? 2 : null);

  res.json({
    headers: req.headers,
    body: req.body.length > 0 ? req.body.toString() : null,
    form: req.is("urlencoded") ? req.body : null,
    json: req.is("json") ? req.body : null,
    method: req.method,
    target: req.url,
    host: req.headers.host
  });
});

app.listen(8080);
