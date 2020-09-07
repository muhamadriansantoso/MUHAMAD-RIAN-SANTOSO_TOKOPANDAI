//Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

function naikAngkot(arrPenumpang) {
    var arrayData = [];
    var bayar = 0;
    if (arrPenumpang === '' || arrPenumpang.length === 0) {
        return '[]';
    } else {
        arrPenumpang.forEach(function (currentValue) {
            if (currentValue[1] === 'B' && currentValue[2] === 'F') {
                bayar = 8000
            } else if (currentValue[1] === 'A' && currentValue[2] === 'B') {
                bayar = 2000
            } else {
                bayar = 0
            }
            arrayData.push('Penumpang: ' + currentValue[0] + ', naikDari: ' + currentValue[1] + ', tujuan: ' + currentValue[2] + ', bayar: ' + bayar);
        });
        return JSON.stringify(arrayData);
    }
}

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
