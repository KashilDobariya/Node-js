var http = require("http");
console.log(http);
var server = http.createServer((request, response) => {
  response.setHeader("Content-type", "text/html");
  // res.writeHead(200, { "Content-Type": "text/html" });
  response.write("<h1 style= text-align:center;>Hello Kashil</h1>");
  console.log(" request rec.. ");
  response.end();
});
server.listen(7878, () => {
  console.log("Listning 7878");
});