const express = require("express");
const passport = require("passport");
const { BasicStrategy } = require("passport-http");
const { timingSafeEqual } = require("crypto");
const { HTTP_USERNAME, HTTP_PASSWORD } = process.env;

passport.use(
  new BasicStrategy(function(username, password, done) {
    return done(
      null,
      HTTP_USERNAME != null &&
        username.length === HTTP_USERNAME.length &&
        timingSafeEqual(Buffer.from(username), Buffer.from(HTTP_USERNAME)) &&
        password.length === HTTP_PASSWORD.length &&
        timingSafeEqual(Buffer.from(password), Buffer.from(HTTP_PASSWORD))
    );
  })
);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.raw({ type: "*/*" }));
app.set("json spaces", 2);
app.all("/basic-auth", passport.authenticate("basic", { session: false }));
app.all("/*", function(req, res) {
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

app.listen(process.env.PORT || 8080);
