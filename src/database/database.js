//importando o fs para trabalhar com arquivos
import fs from "node:fs/promises"

//definindo o caminho do arquivo db.json
const DATABASE_PATH = new URL("../db.json", import.meta.url)

//criando o banco de dados
export class Database {
   #database = {}

   //metodo para carregar o banco de dados/instanciado toda vez que a classe é executada 
   constructor(){
    //lendo o arquivo db.json
    fs.readFile(DATABASE_PATH, "utf-8")
    //transformando o arquivo em objeto
    .then(data => {
        this.#database = JSON.parse(data)
    })
    //se o arquivo não existir, cria um arquivo vazio
    .catch(() => {
        this.#persist()
    })
   }

   //metodo para persistir os dados no arquivo db.json
   #persist(){
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
   }

   //metodo para inserir dados na tabela
   insert(table,data){
    //verificando se a tabela existe
    if (Array.isArray(this.#database[table])){
        //adicionando o objeto na tabela
        this.#database[table].push(data)
    } else { //se a tabela não existir
        this.#database[table] = [data]
    }
    //persistindo os dados
    this.#persist()
   }
}