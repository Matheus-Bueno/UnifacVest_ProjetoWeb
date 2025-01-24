module.exports = class RoutesController {
    //Rotas
    static hi(req, res){
    res.render("hi", { nomeView: "View nome : hi.hbs" })
    }

    static home(req, res){
        res.render("home", { nomeView: "View nome : home.hbs" })
    }

    static guest(req, res){
        const user = {
            nome : "João",
            age : 20,
            email : "joao@email.com",
            nomeView: "guest.hbs"
        }
        res.render("guest", {user : user})
    }
}