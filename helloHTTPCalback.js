//
const http = require('http');
//
var callback = function (request, response) {
 //
 response.writeHead(200,{"Contetnt-type" : "text/plain"});

 //
 response.end("Olá Mundo Node: \n");

};

var server = http.createServer(callback);

server.listen(3000);

console.log("Servidor iniciado ...");