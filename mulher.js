const express = require("express")
const router = express.Router()

const app = express()
const port = 3000


function mostraMulher(request, response){
response.json(
    {
        nome: 'Joely Brito',
        imagem: 'https://conteudo.imguol.com.br/c/noticias/3c/2019/04/02/inteligencia-artificial-algoritmo-tecnologia-codigo-de-programacao-1554210815064_v2_450x337.jpg.webp',
        minibio: 'Sou aluna do programaria'
    }
)
}
function mostraPorta() {
    console.log("Servidor rodando na porta ", port)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(port, mostraPorta)