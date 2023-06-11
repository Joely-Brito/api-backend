const express = require("express") //Estou iniciando o express
const router = express.Router()  //Estou configurando a primeira parte da rota
const Mulher = require('./mulherModel')
const cors = require('cors')  //Estou trazendo o pacote cors que permite consumir essa API no frontend
const conectaBandodeDados = require('./bancoDeDados.js')
conectaBandodeDados()

const app = express()  //Inicializando o app
app.use(express.json())
app.use(cors())
const port = 3000  //Criando a porta

//porta
function mostraPorta() {
    console.log("Servidor rodando na porta ", port)
}


//GET mulheres
async function mostraMulheres(request, response) {
    try {
        const mulhresVindasDoBancoDeDados = await Mulher.find()
        response.json(mulhresVindasDoBancoDeDados)
    } catch (error){
        console.log(error)
    }
}

//POST 
async function criaMulher(request, response) {
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        citacao: request.body.citacao,
        minibio: request.body.minibio,
    })
    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    } catch (error) {
        console.log(error)
    }
}

//PATCH
async function corrigeMulher(request, response) {
   
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)
        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome
        }
    
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem
        }

        if (request.body.citacao) {
            mulherEncontrada.citacao = request.body.citacao
        }

        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }
        
        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados)
    } catch (error) {
        console.log(error)
    }
}

//delete
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({ mensagem: 'Mulher deletada com sucesso!'})
    } catch (error) {
        console.log(error)
    }
}

app.use(router.get('/mulheres', mostraMulheres ))  //Configurado rota GET/mulheres
app.use(router.post('/mulheres', criaMulher))  //Configurado rota do POST/mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher))  //Configurado rota PATCH/mulheres
app.use(router.delete('/mulheres/:id', deletaMulher))  //Configurado rota DELETE/mulheres
app.listen(port, mostraPorta)  //Servidor ouvindo a porta