export function remove({req, res, database}){
   
   //pegando o id do ticket
    const { id } = req.params
    //removendo o ticket
    database.delete('tickets', id)
    //retornando uma mensagem de sucesso
    return res.end('Ticket removido')
}
    