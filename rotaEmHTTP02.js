//carre ga o modulo HTTP e URL
var http = require('http');
var url = require('url');
var fs= require('fs')
//função para ler um arquivo e escrevelo na response.
function readFile(response,file){
    //faz a leitura do arquivo de forma assincrona
    fs.readFile(file,function(err,data){
        //quando ler escreve na response o conteudo do arquivo json
        response.end(data);
    })}

//Função de callback para o servidor HTTP
var callback = function (request, response) {
    //Define o cabeçalho (header) com o tipo de resposta
    response.writeHead(200, { "Content-type": "application/json; charset=utf-8" });
    //faz o parse url separado o caminho ( rota)
    var parts = url.parse(request.url);
    var path=parts.path;
    //Verifica a rota
    if (parts.path == "/rota1/cadastro") {
        readFile(response,"cadastro.json");

    } else if (parts.path == "/rota1/dados") {
        readFile(response,"dados.json")
    } else if(parts.path == "/rota1/catalogo"){
        readFile(response,"catalogo.json")
    }else{
        response.end("Rota invalida " + parts.path);
    }
}
var server = http.createServer(callback);

// Porta que o servidor vai escutar
server.listen(3000)

//Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");