const express = require("express")
const router = express.Router()

const app = express()
const port = 3000

function mostraPorta() {
    console.log("Servidor rodando na porta ", port)
}

const mulheres = [
    {
        nome: 'Joely Brito',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1305p2oWqElNRrlOdmbASUw2KCQh_rerAvA&usqp=CAU',
        minibio: 'Estudante backend'
    },
    {
        nome: 'Iana Chan',
        imagem: '',
        minibio: 'Fundadora da programaria'
    },
    {
        nome: 'Nina da hora',
        imagem: 'https://www.fundacaotelefonicavivo.org.br/wp-content/uploads/2022/11/10-ninadahora800x500mobile.png',
        minibio: 'Hacker antiracista'
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}

app.use(router.get('/mulheres', mostraMulheres ))
app.listen(port, mostraPorta)