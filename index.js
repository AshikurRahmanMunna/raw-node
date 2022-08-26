const http = require("http");
const url = require("url");

const server = http.createServer(function (req, res) {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ course: "ACC" }));
      res.end();
      break;
    case "/contact":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Contact page</h1>");
      res.end();
      break;
  }
});
console.log(url);
const PORT = 5000;
server.listen(5000);
console.log(`server is running at ${PORT}`);
