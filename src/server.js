import http from "node:http"

function listener(req, res) {
   
}

//criando o server, chamando a função e definindo a porta
http.createServer(listener).listen(3333)

