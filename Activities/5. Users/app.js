var express = require('express')
var bodyParser = require('body-parser')
const { response } = require('express')

global.userData = []

global.app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

require(__dirname + '/routes.js')


app.listen(3000, (req, res) => {
    console.log('Servidor conectado por el puerto 3000')
})