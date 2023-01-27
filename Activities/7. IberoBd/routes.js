var UsersController = require(__dirname+'/api/Controller/UsersController.js').users

app.post("/Usuarios/Guardar", function(req, res){
    UsersController.Guardar(req, res)
})

app.post("/Usuarios/CargarTodas", function(req, res){
    UsersController.CargarTodas(req, res)
})

app.post("/Usuarios/CargarId", function(req, res){
    UsersController.CargarId(req, res)
})

app.post("/Usuarios/ActualizarId", function(req, res){
    UsersController.ActualizarId(req, res)
})

app.post("/Usuarios/Eliminar", function(req, res){
    UsersController.Eliminar(req, res)
})