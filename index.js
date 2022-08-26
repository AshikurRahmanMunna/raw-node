const http = require("http");
const url = require("url");

const server = http.createServer(function (req, res) {
  const address_url="http://localhost:5000/contact?name=mezba&country=bangladesh";
  const parsed_url = url.parse(address_url, true);
  console.log(parsed_url);
});

const PORT = 5000;
server.listen(5000);
console.log(`server is running at ${PORT}`);
