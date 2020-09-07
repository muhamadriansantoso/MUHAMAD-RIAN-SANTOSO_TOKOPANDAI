//Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

function deepSum(arr) {
    if (arr === '' || arr.length === 0) {
        return 'No number';
    } else {
        const flat = arr.map(x => Object.values(x)).reduce((acc, item) => acc.concat(item), []);
        const sum = flat.map(x => Object.values(x)).reduce((acc, item) => acc.concat(item), []);
        const sum2 = sum.map(x => x).reduce((acc, item) => acc + item, 0);
        return sum2.toString();
    }
}

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(deepSum([
        [
            [4, 5, 6],
            [9, 1, 2, 10],
            [9, 4, 3]
        ],
        [
            [4, 14, 31],
            [9, 10, 18, 12, 20],
            [1, 4, 90]
        ],
        [
            [2, 5, 10],
            [3, 4, 5],
            [2, 4, 5, 10]
        ]
    ]));
    res.end("");
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
