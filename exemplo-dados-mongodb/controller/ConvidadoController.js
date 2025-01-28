const Convidado = require("../model/Convidado")

module.exports = class RoutesController {
    //Rotas
    static hi(req, res) {
        res.render("hi", { nomeView: "View nome : hi.hbs" })
    }

    static home(req, res) {
        res.render("home", { nomeView: "View nome : home.hbs" })
    }

    static guest(req, res) {
        const user = {
            nome: "João",
            age: 20,
            email: "joao@email.com",
            nomeView: "guest.hbs"
        }
        res.render("guest", { user: user })
    }

    static cadastrar(req, res) {
        res.render("cadastrar", { nomeView: "View nome : cadastrar.hbs" })
    }

    static async cadastrarPost(req, res) {
        const nome = req.body.nome
        const age = req.body.age
        const email = req.body.email

        const convidado = new Convidado(nome, age, email)
        convidado.save()

        res.redirect("/")
    }

    static async listar(req, res) {
        const lista = await Convidado.listar()
        res.render('listar', { lista })
    }

    static async listarEditar(req, res) {
        const id = req.params.id
        console.log(id)

        const convidado = await Convidado.listarEditar(id)

        res.render('editar', { convidado })
    }



    static async editar(req, res) {

        const id = req.body.id
        const nome = req.body.nome
        const age = req.body.age
        const email = req.body.email

        const convidado = await Convidado.editar(id, nome, age, email)

        res.redirect("/listar")
    }



}