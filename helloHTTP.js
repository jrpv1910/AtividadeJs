// Carrega o Módulo HTTP
const http = require('http');

//Cria um SERVIDOR HTTP no qual envia uma msg
var server = http.createServer(function (request, response){

    //Define o cabeçalho (header) com o tipo de resposta 
    response.writeHead(200, {"Contente-type": "text/plain"});

    //mensagem de retorno
    response.end("Ola Mundo Node!\n");
});
//porta que o servidor vai escutar 
server.listen(3000);

//Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");