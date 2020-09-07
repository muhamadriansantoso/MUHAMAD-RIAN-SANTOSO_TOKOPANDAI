//Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;


//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    for (var a = 1; a <= 6; a++) {
        for (var c = 6; c >= a; c--) {
            res.write(" ");
        }
        if (a % 2 === 0) {
            for (var c = a; c < 2 * a; c++) {
                if (c % 2 === 0 || a % 2 !== 0) {
                    res.write("X");
                } else {
                    res.write("O");
                }
            }
            for (var c = 2 * (a - 1); c >= a; c--) {
                if (c % 2 === 0 || a % 2 !== 0) {
                    res.write("X");
                } else {
                    res.write("O");
                }
            }
        } else {
            for (var c = a; c < 2 * a; c++) {
                if (c % 2 === 0 || a % 2 === 0) {
                    res.write("O");
                } else {
                    res.write("X");
                }
            }
            for (var c = 2 * (a - 1); c >= a; c--) {
                if (c % 2 === 0 || a % 2 === 0) {
                    res.write("O");
                } else {
                    res.write("X");
                }
            }
        }
        res.write("\n");
    }
    res.end("");
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
