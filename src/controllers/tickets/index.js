/**
 * create - criar 
 * index - listar 
 * update - atualizar 
 * remove - remover 
 * show - exibir um unico registro 
 */

//função para listar os tickets
export function index({req, res, database}){
    //buscando todos os tickets no banco de dados
    const tickets = database.select("tickets")
    //retornando os tickets
    return res.end(JSON.stringify(tickets))
}