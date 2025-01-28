//Importando o Express
const express  = require('express')

//Importando a classe de controle de rotas
const rotasController = require("./rotasController")

//Importando o Router Objeto do express
const router = express.Router()


//Rotas
router.get('/', rotasController.home)
router.get('/login', rotasController.login)
router.get('/logout', rotasController.logout)
router.post('/validacao', rotasController.validacao)

module.exports = router