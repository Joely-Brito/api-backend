const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBandodeDados() {
    try {
        console.log('Inicializando conexão com banco de dados')

        await mongoose.connect(process.env.MONGO_URL)

        console.log('Conexão com banco de dados realizada com sucesso!')
    } catch(error){
        console.log(error)
    }

}

module.exports = conectaBandodeDados