// Minimal military symbol server using nodejs and milsymbol
const http = require("http");
const ms = require("../../dist/milsymbol.js");
const url = require("url");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  var url_parts = url.parse(req.url, true);
  var symbol = new ms.Symbol(Object.assign({}, url_parts.query)).asSVG();
  res.statusCode = 200;
  res.setHeader("Content-Type", "image/svg+xml");
  res.end(symbol);
});

server.listen(port, hostname, () => {
  console.log(
    `Try out the symbol server: http://${hostname}:${
      port
    }/?sidc=SFG-UCI----D&size=50`
  );
});
