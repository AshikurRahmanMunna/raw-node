const http = require('http');

const server = http.createServer(function(req, res) {
    res.sendDate('Hello')
})

const PORT = 5000;
server.listen(5000);
console.log(`server is running at ${PORT}`);