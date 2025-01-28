const conn = require("../db/conexao")
const { ObjectId } = require("mongodb");

class Convidado {

    constructor(nome, age, email) {
        this.nome = nome
        this.age = age
        this.email = email
    }

    save() {
        const guest = conn.db().collection('convidados').insertOne({
            nome: this.nome,
            age: this.age,
            email: this.email
        })

        return guest
    }

    static listar() {
        const lista = conn.db().collection('convidados').find().toArray()
        return lista
    }

    static listarEditar(id) {
        //console.log(id + " id que chegou")
        //console.log(typeof id)
        const convidado = conn.db().collection('convidados').findOne({ _id: new ObjectId(id) })
        return convidado
    }

    static async editar(id, nome, age, email) {
        const convidado = await conn.db().collection('convidados')
            .updateOne({ _id: ObjectId(id) }, { $set: { nome: nome, age: age, email: email } })
        return convidado
    }
}

module.exports = Convidado