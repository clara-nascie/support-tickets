export const tickets = [
    {
        //criando a rota de tickets para criar um novo ticket
        method: 'POST', //método http
        path: '/tickets', //caminho da rota
        //função que será executada quando a rota for acessada
        controller: (req, res) => {
            Response.end("criado com sucesso")
        }
    }
]
