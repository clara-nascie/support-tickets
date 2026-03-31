/**
 * create - criar 
 * index - listar 
 * update - atualizar 
 * remove - remover 
 * show - exibir um unico registro 
 */

//função para listar os tickets
export function index({req, res, database}){

    //pegando o status da query
    const {status} = req.query
    console.log(status)

    //criando os filtros
    const filters = status ? {status} : null

    //buscando todos os tickets no banco de dados
    const tickets = database.select("tickets", filters)
    //retornando os tickets
    return res.end(JSON.stringify(tickets))
}