var liveServer = require("live-server");

var params = {
  port: 8080, // Set the server port. Defaults to 8080.
  root: ".", // Set root directory that's being served. Defaults to cwd.
  open: true, // When false, it won't load your browser by default.
  ignore: "node_modules, src", // comma-separated string for paths to ignore
  watch: "dist",
  file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
  logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
  middleware: [
    function (req, res, next) {
      next();
    },
  ], // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);
