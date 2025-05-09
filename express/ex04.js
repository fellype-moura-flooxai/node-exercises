const express = require('express')
const server = express()

server.route('/clientes')
.get((req, res) => res.send('lista de clientes'))
.post((req, res) => res.send('novo cliente'))
.put((req, res) => res.send('altera cliente'))
.delete((req, res) => res.send('remove cliente'))

server.listen(3000, () => console.log('executando...'))