import http from "node:http"
import { jsonHandler } from "./middlewares/jsonHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"

async function listener(req, res) {
   //chamando o middleware de json de forma assíncrona
   await jsonHandler(req, res)

   //chamando o middleware de rotas
   routeHandler(req, res)

   // Enviando uma resposta para que o Insomnia não fique aguardando eternamente
   return res.end(JSON.stringify({ message: "Servidor rodando com sucesso!" }))
}

//criando o server, chamando a função e definindo a porta
http.createServer(listener).listen(3333)

