var Post = {
    Tipo: "POST",
    Host: "http://localhost:3000/",
    Path: "",
    Data: ""
    }

function Peticion(Post, callback){
    var xhr = new XMLHttpRequest(); // create object XMLHttpRequest
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        return callback(this.responseText)
    }
    });

    xhr.open(Post.Tipo, Post.Host + Post.Path); // [Host + Path]=endpoint
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(Post.Data);
}

function Guardar() {
    var id = document.getElementById("Cedula").value;
    var name = document.getElementById("Name").value;
    var lastname = document.getElementById("LastName").value;
    var add = document.getElementById("Address").value;
    var phone = document.getElementById("Phone").value;
    var age = document.getElementById("Age").value;
    var ms = document.getElementById("MaritalStatus").value;

    Post.Data = "Cedula="+id+"&Name="+name+"&LastName="+lastname+"&Address="+add+"&Phone="+phone+"&Age="+age+"&Marital="+ms
    Post.Path = "Usuarios/Guardar"
    console.log(Post)
    Peticion(Post,function(res){
        console.log(res);
    })
}

function Listar() {
    var id = document.getElementById("Cedula").value;

    Post.Data = "Cedula="+id
    Post.Path = "Usuarios/ListarUsuario"
    console.log(Post)
    Peticion(Post,function(res){
        console.log(res);
    })
}        

function Modificar() {
    var id = document.getElementById("Cedula").value;
    var add = document.getElementById("Address").value;
    var phone = document.getElementById("Phone").value;
    var age = document.getElementById("Age").value;
    var ms = document.getElementById("MaritalStatus").value;

    Post.Data = "Cedula="+id+"&Address="+add+"&Phone="+phone+"&Age="+age+"&Marital="+ms
    Post.Path = "Usuarios/ModificarUsuario"
    console.log(Post)
    Peticion(Post,function(res){
        console.log(res);
    })
}

function Borrar() {
    var id = document.getElementById("Cedula").value;

    Post.Data = "Cedula="+id
    Post.Path = "Usuarios/BorrarPorCedula"
    console.log(Post)
    Peticion(Post,function(res){
        console.log(res);
    })
}


