const express = require('express')
const server = express()

server.use(function(req, res, next) {
    console.log('inicio...')
    next()
    console.log('fim...')
})

server.use(function(req, res) {
    console.log('resposta...')
    res.send('<h1>API!</h1>')
})

server.listen(3000, () => console.log('executando...'))