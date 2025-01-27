//Configs
const express =require("express")
const conn =  require("./db/conexao")
const exphbs = require("express-handlebars")
const bodyparser = require("body-parser")
const rotas = require("./routes/rotas")
const convidado = require("./model/Convidado")


//Requisição
const app = express()

// Config Body-parser
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended : true}))

app.use("/", rotas)
const port = 3000
app.use("/public", express.static(__dirname + "/public"))

// Template Engine
app.engine("hbs", exphbs.engine({extname : ".hbs"}))
app.set('view engine', "hbs")

app.listen(port, ()=> console.log(`Exemplo de conexao com o MongoDb na porta ${port}.`))