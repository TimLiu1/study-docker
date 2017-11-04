const http = require('http');
let app = function (req, res) {
    res.writeHead(200);
    res.end("hello world");
}

let server = http.createServer(app)
server.listen(3000, function (err, result) {
    console.log("listening on 3000");
})