export function update({req, res, database}) {
   
    //extrai o id do ticket
    const {id} = req.params
    //se o body for nulo ou não existir, retorna um erro em vez de crashar
    if (!req.body) {
        return res.writeHead(400).end("Faltou preencher o corpo da mensagem!")
    }

    const {equipment} = req.body
    
    //retorna o equipamento!
    return res.end(equipment)
}