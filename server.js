const express = require("express")

const app = express()
const port = 3000

function mostraPorta() {
    console.log("Servidor rodando na porta ", port)
}
app.listen(port, mostraPorta)