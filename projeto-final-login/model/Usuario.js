class Usuario{
    constructor(email, senha){
        this.email = email
        this.senha = senha
    }

    static async validar(email,senha){
        if(email === "email", senha === "senha"){
            return true
        }else{
            return false
        }

    }

}
module.exports = Usuario