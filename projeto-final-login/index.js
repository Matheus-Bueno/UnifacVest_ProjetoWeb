const express = require("express")
const exphbs = require("express-handlebars")
const session = require("express-session")
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.engine('hbs', exphbs.engine({ extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use('./public',express.static('public'))

const rotas = require("./routers/rotas")
app.use('./',rotas)

const umDia = 100*60*60*24
app.use(session({
    secret : "minhachavesecreta",
    saveUninitialized :true,
    cookie : {maxAge: umDia},
    resave : false,
    name: "unplugged"
}))


app.listen(3000, ()=>{
    console.log("Servidor Iniciando na Porta 3000")
})
