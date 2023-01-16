var express = require('express');
var app = express();

//GET/POST/

app.listen(3000, function () {
    console.log('server on port 3000');
})

app.get('/calculadora/:A/:B', (req, res) => {
    Suma = (parseFloat(req.params.A) + parseFloat(req.params.B))
    Minus = (parseFloat(req.params.A) - parseFloat(req.params.B))
    Producto = (parseFloat(req.params.A) * parseFloat(req.params.B))
    Division = (parseFloat(req.params.A) / parseFloat(req.params.B))
    res.json({Add:Suma,Substract:Minus,Multiply:Producto,Divided:Division});
});