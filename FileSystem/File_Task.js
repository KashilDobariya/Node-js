const fs = require("fs")
fs.writeFileSync("test.txt", `<h1 style= " background-color:lightblue; border:15px; border-radius:5px;"><center>writing the data synchrnously....</center><h1>`);
fs.appendFileSync("test.txt", `\n<h1 style= " background-color:lightblue; border:15px; border-radius:5px;"><center>data appended synchronously....</center><h1>`);
fs.writeFileSync("test1.txt", "");
const result = fs.readFileSync("test.txt", "utf-8");
fs.appendFileSync("test1.txt", result);
fs.unlink("test.txt", (err) => {
    if (err) throw err;
    else {
        console.log("file deleted successfully !!!");
    }
});


var http = require("http");
var server = http.createServer((request, response) => {
    response.write(result.toString());
    console.log(" request rec.. ");
    response.end();
});
server.listen(9999, () => {
    console.log("Listning 9999");
});