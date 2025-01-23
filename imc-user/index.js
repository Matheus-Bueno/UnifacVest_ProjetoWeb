import express from "express"
import path, { dirname } from "path"
import { fileURLToPath } from "url"

const app = express()

const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.get("/",(req,res)=>{
    res.sendFile("public/index.html", {root: __dirname})
})


app.get("/res-imc",(req,res)=>{
    
    let peso = req.query.pesoUser
    let altura = req.query.alturaUser

    let imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))

    let pagina = "<div>"
    pagina += "<h1>VERIFIQUE SEU IMC</h1>"
    pagina += "<ul>"
    pagina += "<li><a href='/'>Home</a><li>"
    pagina += "</ul>"
    pagina += "</div>"
    pagina += `<h2> O seu IMC é ${imc} </h2>`
    res.send(pagina)
})

app.listen(8000, "127.0.0.1")
console.log("Servidor respondendo na porta 8000!")