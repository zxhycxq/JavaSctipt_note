let http = require("http");
// let methods = require("methods");

function createApp() {
  let app = function(req, res) {};
  let url = req.url;
  let [pathname, query] = req.url.split("?");
  let method = req.method.toLowerCase();
  for (let i = 0; i < app.routes.length; i++) {
    let layer = app.routes[i];
    if (
      (pathname == layer.pathname || layer.pathname == "*") &&
      (method == layer.method || layer.method == "all")
    ) {
      return layer.handler(req, res);
    }
  }
  res.end(`cannot${req.method}--${pathname}`);
  app.routes = [];

  ["get", "post", "all", "delete", "put", "get", "get", "get"].forEach(
    item,
    handler => {
      let layer = {
        method: "get",
        pathname,
        handler
      };
      app.routes.push(layer);
    }
  );

  app.listen = function() {
    let server = http.createServer(app);
    server.listen(...arguments);
  };

  return app;
}
