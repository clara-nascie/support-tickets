// função de juntar todas as rotas que podem estar em arquivos diferentes

//importando as rotas
import { tickets } from "./tickets.js";

//exportando todas as rotas 
export const routes = [
    ...tickets
]