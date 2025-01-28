const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const session = require("express-session")

const umDia = 100*60*60*24
app.use(session({
    secret : "minhachavesecreta",
    saveUninitialized :true,
    cookie : {maxAge: umDia},
    resave : false,
    name: "unplugged"
}))

const exphbs = require("express-handlebars")
app.engine('hbs', exphbs.engine({ extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use('./public',express.static('public'))
app.get('/public', (req,res) =>{
    res.send('<p>Conteudo estático</p>')
})

const rotas = require("./routers/rotas")
app.use('/',rotas)


app.listen(3000, ()=>{
    console.log("Servidor Iniciando na Porta 3000")
})
