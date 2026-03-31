import { create } from "../controllers/tickets/create.js"
import { index } from "../controllers/tickets/index.js"
import { update } from "../controllers/tickets/update.js"

export const tickets = [
    {
        //criando a rota de tickets para criar um novo ticket
        method: 'POST', //método http
        path: '/tickets', //caminho da rota
        //função que será executada quando a rota for acessada
        controller: create,
    },

    {
        //criando a rota de tickets para listar todos os tickets
        method: 'GET', //método http
        path: '/tickets', //caminho da rota
        //função que será executada quando a rota for acessada
        controller: index,
    },

    {
        //criando a rota de tickets para listar todos os tickets
        method: 'PUT', //método http
        path: '/tickets/:id', //caminho da rota
        //função que será executada quando a rota for acessada
        controller: update,
    },
]
