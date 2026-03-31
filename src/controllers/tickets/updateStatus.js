export function updateStatus({ req, res, database }) {
    //recebe o id do ticket pela rota 
    const { id } = req.params
    const { solution } = req.body
    console.log(solution)
    
    //atualiza o status do ticket para 'closed' na tabela tickets
    database.update('tickets', id, { status: 'closed', solution })
    
    return res.end('Status atualizado')
}
    
