# http-echo

A simple HTTP request and response testing server.

| Deploy                                                          | Demo                                             | Status                                                                        | Response                                                                          |
| --------------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [![Deploy with Vercel][vercel-button]][vercel-deploy]           | https://http-echo.vercel.app/                    | [![vercel-status][vercel-status]][vercel-stats]                               | [![vercel-response][vercel-response]][vercel-stats]                               |
| [![Deploy to Netlify][netlify-button]][netlify-deploy]          | https://http-echo.netlify.app/                   | [![netlify-status][netlify-status]][netlify-stats]                            | [![netlify-response][netlify-response]][netlify-stats]                            |
| [![Deploy to Cloudflare][cloudflare-button]][cloudflare-deploy] | https://http-echo.kou029w.workers.dev/           | [![cloudflare-status][cloudflare-status]][cloudflare-stats]                   | [![cloudflare-response][cloudflare-response]][cloudflare-stats]                   |
| [`wrangler pages deploy`][cloudflare-pages-deploy]              | https://http-echo.pages.dev/                     | [![cloudflare-pages-status][cloudflare-pages-status]][cloudflare-pages-stats] | [![cloudflare-pages-response][cloudflare-pages-response]][cloudflare-pages-stats] |
| [![Deploy on Deno][deno-button]][deno-deploy]                   | https://http-echo.fogtype.deno.net/              | [![deno-status][deno-status]][deno-stats]                                     | [![deno-response][deno-response]][deno-stats]                                     |
| [`deployctl deploy`][deno-classic-deploy]                       | https://httpecho.deno.dev/                       | [![deno-classic-status][deno-classic-status]][deno-classic-stats]             | [![deno-classic-response][deno-classic-response]][deno-classic-stats]             |
| [![Run on Google Cloud][cloud-run-button]][cloud-run-deploy]    | https://http-echo-368421396473.us-west1.run.app/ | [![cloud-run-status][cloud-run-status]][cloud-run-stats]                      | [![cloud-run-response][cloud-run-response]][cloud-run-stats]                      |
| [`flyctl deploy`][fly-deploy]                                   | https://http-echo.fly.dev/                       | [![fly-status][fly-status]][fly-stats]                                        | [![fly-response][fly-response]][fly-stats]                                        |
| [![Deploy to Koyeb][koyeb-button]][koyeb-deploy]                | https://http-echo.koyeb.app/                     | [![koyeb-status][koyeb-status]][koyeb-stats]                                  | [![koyeb-response][koyeb-response]][koyeb-stats]                                  |
| [![Deploy to Render][render-button]][render-deploy]             | https://http-echo-8zjm.onrender.com/             | [![render-status][render-status]][render-stats]                               | [![render-response][render-response]][render-stats]                               |
| [![Deploy on Railway][railway-button]][railway-deploy]          | https://http-echo.up.railway.app/                | [![railway-status][railway-status]][railway-stats]                            | [![railway-response][railway-response]][railway-stats]                            |

[vercel-button]: https://vercel.com/button
[vercel-deploy]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkou029w%2Fhttp-echo
[vercel-status]: https://img.shields.io/uptimerobot/ratio/m785227110-ad9ed6f027362deca73c5545
[vercel-response]: https://badgen.net/uptime-robot/response/m785227110-ad9ed6f027362deca73c5545?cache=3600
[vercel-stats]: https://stats.uptimerobot.com/nvFNpdDe66/785227110
[netlify-button]: https://www.netlify.com/img/deploy/button.svg
[netlify-deploy]: https://app.netlify.com/start/deploy?repository=https://github.com/kou029w/http-echo
[netlify-status]: https://img.shields.io/uptimerobot/ratio/m785227106-68817ca23ae856b934c57eae
[netlify-response]: https://badgen.net/uptime-robot/response/m785227106-68817ca23ae856b934c57eae?cache=3600
[netlify-stats]: https://stats.uptimerobot.com/nvFNpdDe66/785227106
[cloudflare-button]: https://deploy.workers.cloudflare.com/button
[cloudflare-deploy]: https://deploy.workers.cloudflare.com/?url=https://github.com/kou029w/http-echo
[cloudflare-status]: https://img.shields.io/uptimerobot/ratio/m801645762-234ab987c7897610095045d2
[cloudflare-response]: https://badgen.net/uptime-robot/response/m801645762-234ab987c7897610095045d2?cache=3600
[cloudflare-stats]: https://stats.uptimerobot.com/nvFNpdDe66/801645762
[cloudflare-pages-deploy]: https://developers.cloudflare.com/workers/wrangler/commands/#deploy-1
[cloudflare-pages-status]: https://img.shields.io/uptimerobot/ratio/m801658952-9ede2b689610545f32b10c42
[cloudflare-pages-response]: https://badgen.net/uptime-robot/response/m801658952-9ede2b689610545f32b10c42?cache=3600
[cloudflare-pages-stats]: https://stats.uptimerobot.com/nvFNpdDe66/801658952
[deno-button]: https://deno.com/button
[deno-deploy]: https://console.deno.com/new?clone=https://github.com/kou029w/http-echo
[deno-status]: https://img.shields.io/uptimerobot/ratio/m801646133-d2ea21dc6f51e67333d44d8d
[deno-response]: https://badgen.net/uptime-robot/response/m801646133-d2ea21dc6f51e67333d44d8d?cache=3600
[deno-stats]: https://stats.uptimerobot.com/nvFNpdDe66/801646133
[deno-classic-deploy]: https://docs.deno.com/deploy/classic/
[deno-classic-status]: https://img.shields.io/uptimerobot/ratio/m801659081-278df77e208589a7b1df6ed8
[deno-classic-response]: https://badgen.net/uptime-robot/response/m801659081-278df77e208589a7b1df6ed8?cache=3600
[deno-classic-stats]: https://stats.uptimerobot.com/nvFNpdDe66/801659081
[cloud-run-button]: https://deploy.cloud.run/button.svg
[cloud-run-deploy]: https://deploy.cloud.run/?git_repo=https://github.com/kou029w/http-echo
[cloud-run-status]: https://img.shields.io/uptimerobot/ratio/m785227129-d960a8a50ba6f79398c4106e
[cloud-run-response]: https://badgen.net/uptime-robot/response/m785227129-d960a8a50ba6f79398c4106e?cache=3600
[cloud-run-stats]: https://stats.uptimerobot.com/nvFNpdDe66/785227129
[fly-deploy]: https://fly.io/speedrun
[fly-status]: https://img.shields.io/uptimerobot/ratio/m785227121-c123ab01967bdea4c74d9592
[fly-response]: https://badgen.net/uptime-robot/response/m785227121-c123ab01967bdea4c74d9592?cache=3600
[fly-stats]: https://stats.uptimerobot.com/nvFNpdDe66/785227121
[koyeb-button]: https://www.koyeb.com/static/images/deploy/button.svg
[koyeb-deploy]: https://app.koyeb.com/services/deploy?repository=kou029w%2Fhttp-echo&type=git&ports=8080;http;/
[koyeb-status]: https://img.shields.io/uptimerobot/ratio/m801658650-6f41ccf9a268bfb3da1110e9
[koyeb-response]: https://badgen.net/uptime-robot/response/m801658650-6f41ccf9a268bfb3da1110e9?cache=3600
[koyeb-stats]: https://stats.uptimerobot.com/nvFNpdDe66/801658650
[render-button]: https://render.com/images/deploy-to-render-button.svg
[render-deploy]: https://render.com/deploy?repo=https://github.com/kou029w/http-echo
[render-status]: https://img.shields.io/uptimerobot/ratio/m801663211-396405c5b4894cbe881b068c
[render-response]: https://badgen.net/uptime-robot/response/m801663211-396405c5b4894cbe881b068c?cache=3600
[render-stats]: https://stats.uptimerobot.com/nvFNpdDe66/801663211
[railway-button]: https://railway.com/button.svg
[railway-deploy]: https://railway.com/deploy/0YUyGY?referralCode=Wf7n-3
[railway-status]: https://img.shields.io/uptimerobot/ratio/m801656512-ed52f7df1f229a7690cf2abc
[railway-response]: https://badgen.net/uptime-robot/response/m801656512-ed52f7df1f229a7690cf2abc?cache=3600
[railway-stats]: https://stats.uptimerobot.com/nvFNpdDe66/801656512
