// resposável por lidar com as rotas 

//importando as rotas 
import { routes } from "../routes/index.js";
import { Database } from "../database/database.js";
import { extractQueryParams } from "../utils/extractQuerryParams.js";

//criando o banco de dados
const database = new Database()

//função que vai lidar com as rotas 
export function routeHandler(req, res) {
   //procurando a rota que corresponde ao método e ao caminho da requisição
    const route = routes.find((route) => {
        //usa o método test() da Regex para verificar se o caminho da requisição bate com o padrão
        return route.method === req.method && route.path.test(req.url)
    })

    // se route existe 
    if (route) { 
        //extrai os parâmetros da rota
        const routeParams = req.url.match(route.path)

       //extrai os parâmetros da rota e query params
        const {query, ...params} = routeParams.groups

        //adiciona os parâmetros da rota ao objeto req
        req.params = params

        //adiciona os parâmetros da rota ao objeto req
        req.query = query ? extractQueryParams(query) : {}

        //executa a função controller (criado com sucesso!) se a rota for encontrada
        return route.controller({req,res, database}) 
    }

    //retorna 404 se a rota não for encontrada
    return res.writeHead(404).end("Rota não encontrada")
    
}