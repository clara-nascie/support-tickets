//importando o crypto para gerar id
import {randomUUID} from "node:crypto"

//importando o banco de dados, quando entre {} a ordem de chamada nao importa 
export function create({req, res, database}) {
   //desestruturando o body da requisicao
   const {equipment, description, user_name} = req.body

   //criando o ticket/objeto
   const ticket = {
      id: randomUUID(),
      equipment,
      description,
      user_name,
      status: "open",
      created_at: new Date(),
      updated_at: new Date(),
   }

   //inserindo o ticket no banco de dados
   database.insert("tickets", ticket)

   //quando der certo, retorna o ticket criado
   return res.writeHead(201).end(JSON.stringify(ticket))
}