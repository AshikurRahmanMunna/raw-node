const fs = require("fs");
const readStream = fs.createReadStream("./video.mp4");

readStream.on("data", (chunk) => {
  console.log("............");
  console.log(chunk);
});

readStream.on("open", () => {
  console.log("Stream is open");
});

setTimeout(() => {
  readStream.pause();
}, 15);

setTimeout(() => {
    readStream.resume();
}, 8000);

console.log("Server is running");