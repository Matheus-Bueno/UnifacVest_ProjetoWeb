const Usuario = require("../model/Usuario")

module.exports = class rotasController {

    static home(req, res) {
        if (req.session.name === "logado") {
            res.render('home', { msg: 'logado' })
        } else {
            res.render('login', { msg: '' })
        }

    }

    static login(req, res) {
        res.render('login', { msg: '' })
    }

    static logout(req, res) {
        if (req.session.name === "logado") {
            req.session.name = "unplugged"
            res.render('login', { msg: '' })
        }

    }

    static async validacao(req, res) {

        console.log("Valor de Email :" + req.body.txtEmail)
        console.log("Valor de Senha :" + req.body.txtSenha)


        const email = req.body.txtEmail
        const senha = req.body.txtSenha

        let mark = await Usuario.validar(email, senha)

        if (mark === true) {
            req.session.name = "logado"
            res.redirect('/')
        } else {
            res.redirect('/login')
        }
    }
}