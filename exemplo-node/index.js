import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const app = express()
const __dirName = path.dirname(fileURLToPath(import.meta.url))

app.get("/", (req,res)=>{
    res.sendFile("public/index.html",{root: __dirName})
})

// app.get("/", (req, res)=>{
//     res.send("<p>Servicor Criado</p>")
// } )

app.get("/NovaRota", (req, res)=>{
    res.send("<p style='color: #0000FF'>Nova Rota criada com Sucesso!</p>")
} )

app.get("/usuario/:nome", (req, res)=>{
    res.send("<h1>Exemplos de Rotas</h1><p style='color: #00FF00'>Valor do parametro passado: "+ req.params.nome +"</p>")
})

app.get("/user2", (req, res)=>{
    res.send("<h1>Envio de usuario por GET</h1> <a href='/view-usuario?nomeUsuario=Mauro'>View</a>")
})

app.get("/view-usuario", (req, res)=>{

    let nmUser = req.query.nomeUsuario

    res.send(`<h1>Parametro recebido através de envio por GET</h1> <p> Usuário : ${nmUser} </p>`)
})

app.listen(3000,()=>{
    console.log("Servidor Iniciado na Porta 3000")
})