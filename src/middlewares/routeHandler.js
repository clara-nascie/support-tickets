// resposável por lidar com as rotas 

//importando as rotas 
import { routes } from "../routes/index.js";

//função que vai lidar com as rotas 
export function routeHandler(req, res) {
   //procurando a rota que corresponde ao método e ao caminho da requisição
    const route = routes.find((route) => {
        //retorna true se a rota for encontrada
        return route.method === req.method && route.path === req.url
    })

    // se route existe 
    if (route) { 
        //executa a função controller (criado com sucesso!) se a rota for encontrada
        return route.controller({req,res}) 
    }

    //retorna 404 se a rota não for encontrada
    return res.writeHead(404).end("Rota não encontrada")
    
}