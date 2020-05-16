module.exports = (req, res) => {
  res.json({
    headers: req.headers,
    body: req.body == null ? null : req.body,
    host: req.headers.host,
    method: req.method,
    target: req.url,
    query: req.query,
    cookies: req.cookies,
  });
};
