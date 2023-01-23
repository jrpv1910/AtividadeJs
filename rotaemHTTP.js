var http = require ('http');
var url = require('url');
//
var callback =  function (request, response){

    //
    response.writeHead(200, {"Content-type": "text/plain; charset=uf-8"});

    //
    var parts = url.parse(request.url);

    //
    if (parts.path == "/"){
        response.end("Site principal");
    } else if (parts.path== "/rota1"){
        response.end("site da rota1");
    }else {
        response.end("rota invalida:" + parts.path);
    }
};

var server = http.createServer(callback);

server.listen(3000);

console.log("Servidor iniciado em http://localhost:3000/");