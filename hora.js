const express = require("express")
const router = express.Router()

const app = express()
const port = 3000


function mostraHora(request, response){
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')
    response.send(hora)
}

function mostraPorta() {
    console.log("Servidor rodando na porta ", port)
}
app.listen(port, mostraPorta)