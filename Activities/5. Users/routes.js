var UserControllers = require(__dirname + '/Controller/UserControllers').users

app.post("/Usuarios/Guardar", function (req, res) {
    UserControllers.Guardar( req,   res );
})

app.post("/Usuarios/Listar", function (req, res) {
    UserControllers.Listar( req,   res );
})

app.post("/Usuarios/ActualizarPorCedula", function (req, res) {
    UserControllers.Actualizar( req,   res );
})

app.post("/Usuarios/BorrarPorCedula", function (req, res) {
    UserControllers.Borrar( req,   res );
})