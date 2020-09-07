//Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    var arry = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];
    var arrayTemp = [];
    for (var a = arry.length; a >= 1; a--) {
        arrayTemp = [];
        for (var b = 1; b <= a; b++) {
            res.write(" ");
        }
        for (var c = arry.length; c >= a; c--) {
            if (a % 2 === 0) {
                res.write(arry[c - 1]);
            } else {
                arrayTemp.push(arry[c - 1]);
            }
        }
        arrayTemp.reverse();
        for (var d = 0; d < arrayTemp.length; d++) {
            res.write(arrayTemp[d]);
        }
        res.write("\n");
    }
    res.end("");
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
