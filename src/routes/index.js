// função de juntar todas as rotas que podem estar em arquivos diferentes

//importando as rotas
import { tickets } from "./tickets.js";
import { parseRoutePath } from "../utils/parseRoutePath.js";

//exportando todas as rotas 
export const routes = [
    //map para transformar cada rota em uma regex
    ...tickets.map(route => ({
            ...route,
            //transformando a rota em regex
            path: parseRoutePath(route.path)
        }))
]