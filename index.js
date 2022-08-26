const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  if(req.url = '/') {
    // fs.readFile('data.ai', (error, data) => {
    //     if(error) {
    //         res.write('Failed to Read Data !!!!!!');
    //         res.end();
    //     }
    //     else {
    //         res.write(data);
    //         res.end();
    //     }
    // })
    // const data = fs.readFileSync('data.ai');
    // res.write(data);
    // res.end();

    fs.rename('newData.txt', 'oldData.txt', (err) => {
        if(err) {
            res.write('Failed to rename file');
            res.end();
        } else {
            res.write('Successfully renamed file');
            res.end();
        }
    })
  }
});

const PORT = 5000;
server.listen(5000);
console.log(`server is running at ${PORT}`);