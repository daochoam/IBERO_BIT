var UsersModels={}

/*=============     MONGO DB     ===============*/
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var UsersSchema = new Schema({
    Code:String,
    Name:String,
    Email:String,
})

const IberoBdDanielOchoa = mongoose.model('Users',UsersSchema)

/*============= Request Methods  ===============*/
/*=============     (CRUD)       ===============*/
/*=============     CREATE       ===============*/
UsersModels.Guardar = function(post,callback) {
    const instance = new IberoBdDanielOchoa
    instance.Code = post.Code
    instance.Name = post.Name
    instance.Email = post.Email
    
    instance.save((err,created) =>{
        if(err){
            return callback({state:false,data:err})
        }
        else{
            return callback({state:true})
        }
    })
}

/*=============      READ       ===============*/
UsersModels.CargarTodas = function(post,callback) {
    IberoBdDanielOchoa.find({},{},(err,doc)=>{
        if(err){
            return callback({state:false,data:err})
        }else{
            return callback({state:true,data:doc})
        }
    })
}

UsersModels.CargarId = function(post,callback) {
    IberoBdDanielOchoa.findById(post.Id,{},(err,doc) =>{
        if(err){
            return callback({state:false,data:err})
        }else{
            return callback({state:true,data:doc})
        }
    })
}
/*=============      UPDATE      ===============*/
UsersModels.ActualizarId = function(post,callback) {
    IberoBdDanielOchoa.findByIdAndUpdate(post.Id,{
        Code: post.Code,
        Name: post.Name,
    },(err,doc)=>{
        if(err){
            return callback({state:false,data:err})
        }else{
            return callback({state:true})
        }
    })
}
/*=============      DELETE      ===============*/

UsersModels.Eliminar = function(post,callback) {
    IberoBdDanielOchoa.findByIdAndDelete(post.Id,(err,doc)=>{
        if(err){
            return callback({state:false,data:err})
        }else{
            return callback({state:true})
        }
    })
}

module.exports.users = UsersModels