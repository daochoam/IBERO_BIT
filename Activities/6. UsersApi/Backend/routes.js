var UserControllers = require(__dirname + '/Controllers/UserControllers').users

app.post("/Usuarios/Guardar", function (req, res) {
    UserControllers.SaveUser( req,   res );
})

app.post("/Usuarios/ListarUsuario", function (req, res) {
    UserControllers.ListByCC( req,   res );
})

app.post("/Usuarios/ModificarUsuario", function (req, res) {
    UserControllers.UpdateByCC( req,   res );
})

app.post("/Usuarios/BorrarPorCedula", function (req, res) {
    UserControllers.DeleteByCC( req,   res );
})