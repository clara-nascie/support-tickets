
// chamando a função para converter o json em objeto 
export async function jsonHandler(req, res) {
   //criando um array para armazenar os chunks
    const buffers = []

    //pegando os chunks do body de forma assíncrona 
    for await (const chunk of req) {
       //armazenando os chunks no array
        buffers.push(chunk)
    }

    try {
        //transformando os chunks em string e convertendo para um objeto do tipo json
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
       //se der erro, o body será null
        req.body = null
    }

    //definindo o header para json e chamando a função para enviar a resposta
    res.setHeader('Content-Type', 'application/json')
}
