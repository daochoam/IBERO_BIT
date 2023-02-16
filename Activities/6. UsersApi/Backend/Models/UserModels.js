var UserModels = {}

function Names_Format(word) {
    if (typeof word != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres (text)')
    }
    let word_split = word.trim().split(' ')
    return word_split.map(p => p[0].toUpperCase() + p.slice(1).toLowerCase()).join(' ')
}

UserModels.SaveUser = function (post, callback) {
    userData.push({
        Id: post.Id.trim(),
        Name: Names_Format(post.Name.trim()),
        LastName: Names_Format(post.LastName.trim()),
        Address: post.Address.trim(),
        Phone: post.Phone.trim(),
        Age: post.Age.trim(),
        MaritalStatus: post.MaritalStatus.trim(),
    })

    return callback({ state: true, message: "User Save" })
}

UserModels.ListByCC = function (post, callback) {
    if (userData.length == 0) {
        return callback({ state: false, message: 'There are no registered users' })
    }
    return callback({ state: true, datos: userData })
}

UserModels.UpdateByCC = function (post, callback) {
    userData[post.loc].Address = post.Address.trim()
    userData[post.loc].Phone = post.Phone.trim()
    userData[post.loc].Age = post.Age.trim()
    userData[post.loc].MaritalStatus = post.MaritalStatus.trim()
    return callback({ state: true, message: `The registered user with #Id ${post.Id} has been updated successfully` })
}

/*=============      DELETE      ===============*/

UserModels.DeleteByCC = function (loc, callback) {
    userData.splice(loc, 1);
        return callback({ state: true, message:'User deleted successfully.' })
}


module.exports.users = UserModels