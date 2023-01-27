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

app.all('*',function(request,response,next){
    var whitelist = request.headers.origin;

    response.header('Access-Control-Allow-Origin', whitelist)
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
    response.header('Access-Control-Allow-Headers', " authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    response.header("Access-Control-Allow-Credentials", "true");

    next()
})

var cors = require('cors')

app.use(cors({
    origin:function(origin,callback) {
        console.log(origin)
        if(!origin) return callback(null,true)
        
        if(config.whitelist.indexOf(origin) === -1) {
            return callback('error cors',false)
        }
        return callback(null,true)
    }
}))


app.listen(3000, (req, res) => {
    console.log('Servidor conectado por el puerto 3000')
})