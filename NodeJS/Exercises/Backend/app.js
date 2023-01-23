var express = require('express');
var app = express();

//GET/POST/


app.listen(3000, function(){
    console.log('server on port 3000');
})

app.get('/',(req,res)=>{
    res.send('Hola mundo');
});
