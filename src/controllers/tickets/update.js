export function update({req, res, database}) {
   
    //extrai o id do ticket
    const {id} = req.params
    //extrai os dados do ticket
    const {equipment, description} = req.body

   //atualiza os dados do ticket na tabela tickets 
    database.update("tickets", id, {
        equipment, 
        description, 
        updated_at: new Date(),
    })
    
    //retorna o equipamento!
    return res.end()
}