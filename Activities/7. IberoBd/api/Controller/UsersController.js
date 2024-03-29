var UsersModels = require(__dirname + '/../Models/UsersModels.js').users
var UsersController = {}

var RegValue = {
    // Capital Letter - No Acent:
    CapitaLetter: /[A-ZÑ]/,
    // Lowercase Letter - No Acent:
    LowercaseLetter: /[a-zñ]/,
    // Word Characters
    WordCharacters: /[A-ÿ]/,
    // Acent Characters:
    AcentCharacters: /À-ÿ/,
    // Special Characters:
    SpecialCharacters: /[!-/:-@\[-`\{-~¿¡°]/,
    // Numbers:
    Numbers: /\d/,
    // Multi-Space characters:
    MultiSpace: /[\s]{2,}/,
}

var Form = {
    Name:{
        // Special Characters:
        SpecialCharacters: /[!-/:-@\[-`\{-~¿¡°]/,
        // Word Characters
        WordCharacters: /[A-ÿ]/,
        // Numbers:
        Numbers: /\d/,
        // Multi-Space characters:
        MultiSpace: /[\s]{2,}/,
    },
    Email: {
        // Check include one @.
        Symbol: /@/,
        // MailUserNameM (Gmail rules): Gmail!! does not include dash, underscore.
        UserName: /^((?!^[._-])(?![._-]{2,})[a-z0-9._-](?![._-])){6,30}(?=@)/,
        // MailDomain: Check the email domain structure.
        Domain: /(?<=@)(([\w-]+\.)+[\w-]{2,4})$/,
        // Special Characters:
        SpecialCharacters: /[!-/:-@\[-`\{-~¿¡°]/,
        // Space Characters:
        Spaces: /([\s]{1,})/,
        // Init Special Characters:
        InitSCharacter: /^([.])/,
        // Consecutive Special Characters:
        MultiSCharacter: /[_.-]{2,}/,
        // Username don't finish dot character
        CharArroba: /([_.-])(?=@)/
    },
}

UsersController.Guardar = function (req, res) {
    var post = {
        Code: req.body.Code,
        Name: req.body.Name,
        Email: req.body.Email,
        Password: req.body.Password
    }

    /*********************************************/
    /*************  Check Code   ***************/
    if (post.Code.trim() == "", post.Code.trim() == null || post.Code.trim() == undefined) {
        res.send({ state: false, message: 'The ID field is required.' });
        return false;
    }

    if (/[^\d]/.test(post.Code.trim()) == true) {
        res.send({ state: false, message: 'The ID number must not contain non-numeric characters.' })
        return false;
    }

    if (6 > post.Code.trim().length > 10) {
        res.send({ state: false, message: 'The ID number must contain 6 to 10 digits.' })
        return false;
    }

    /*********************************************/
    /**************** Check Name  ****************/
    // This field is required.
    if (post.Name.trim() == "" || post.Name.trim() == null || post.Name.trim() == undefined) {
        res.send({ state: false, message: 'The name field is required.' });
        return false;
    }
    // The field contain many spaces between names.
    if (Form.Name.MultiSpace.test(post.Name.trim()) == true) {
        res.send({ state: false, message: 'The name field contain many spaces between names.' })
        return false;
    }
    // The field must not contain numbers.
    if (Form.Name.Numbers.test(post.Name.trim()) == true) {
        res.send({ state: false, message: 'The name must not contain numbers.' })
        return false;
    }
    // The field must not contain name(s) of more than 15 characters.
    if (Math.max(...post.Name.trim().split(' ').map(p => p.length)) > 15) {
        res.send({ state: false, message: 'The name must not contain name(s) of more than 15 characters.' })
        return false;
    }
    // The field must not contain name(s) of less than 3 characters.
    if (Math.min(...post.Name.trim().split(' ').map(p => p.length)) < 3) {
        res.send({ state: false, message: 'The name must not contain name(s) of less than 3 characters.' })
        return false;
    }
    // The name must not contain special characters.
    if (Form.Name.SpecialCharacters.test(post.Name.trim()) == true) {
        res.send({ state: false, message: 'The name must not contain special characters.' });
        return false;
    }

    /*********************************************/
    /*************** Check Email  ****************/
    if (post.Email.trim() == "" || post.Email.trim() == null || post.Email.trim() == undefined) {
        res.send({ state: false, message: 'The e-mail field is required.' });
        return false;
    }

    // The field contain spaces.
    if (6 > post.Email.match(Form.Email.UserName).length > 30) {
        res.send({ state: false, message: 'The email username must contain between 6 to 30 characters.' })
        return false;
    }

    // The field contain spaces.
    if (Form.Email.Spaces.test(post.Name.trim()) == true) {
        res.send({ state: false, message: 'The e-mail field not must contain spaces.' })
        return false;
    }

    // The field must contain only one @ character.
    if (post.Email.match(Form.Email.Symbol).length != 1) {
        res.send({ state: false, message: 'The email must contain only one @ character.' })
        return false;
    }

    // The field must not start with a special characters.
    if (Form.Email.InitSCharacter.test(post.Email.trim()) == true) {
        res.send({ state: false, message: 'The email username must not start with a special character.' })
    }

    // The field must not contain consecutive special characters.
    if (Form.Email.MultiSCharacter.test(post.Email.trim()) == true) {
        res.send({ state: false, message: 'The email username must not contain consecutive special characters.' })
    }

    // The field must not end with a period.
    if (Form.Email.CharArroba.test(post.Email.trim()) == true) {
        res.send({ state: false, message: 'The email username must not end with a special character.' })
    }

    // The field must not contain.
    if (Form.Email.UserName.test(post.Email.trim()) == false) {
        res.send({ state: false, message: 'The email username is not correct.' })
    }

    /***************     Save    *****************/
    UsersModels.Guardar(post, function (Reply) {
        if (Reply.state == true) {
            res.json({ state: true, message: `User ${post.Name} has been successfully registered` })
        } else {
            res.json({ state: false, message: 'Error saving data' })
        }
    })
}

UsersController.CargarTodas = function (_req, res) {
    UsersModels.CargarTodas(null, function (Reply) {
        if (Reply.state == true) {
            res.json({ state: true, message: 'The user data has been loaded correctly', data: Reply})
        } else {
            res.json({ state: false, message: 'There are no registered users' })
        }
    })
}

UsersController.CargarId = function (req, res) {
    var post = {
        Id: req.body.Id,
    }

    /*********************************************/
    /***************  Check Id   ***************/
    if (post.Id.trim() == "", post.Id.trim() == null || post.Id.trim() == undefined) {
        res.send({ state: false, message: 'The ID field is required.' });
        return false;
    }

    UsersModels.CargarId(post, function (Reply) {
        if (Reply.state == true) {
            res.json({ state: true, message: `The registered user with #Id ${post.Id} has been uploaded successfully`,data: Reply.data })
        } else {
            res.json({ state: false, message: `There is no user registered with the Id number ${post.Id}` })
        }
    })

}

UsersController.ActualizarId = function (req, res) {
    var post = {
        Id: req.body.Id,
        Code: req.body.Code,
        Name: req.body.Name
    }

    /*********************************************/
    /***************  Check Id   ***************/
    if (post.Id.trim() == "", post.Id.trim() == null || post.Id.trim() == undefined) {
        res.send({ state: false, message: 'The ID field is required.' });
        return false;
    }

        /*********************************************/
    /*************  Check Code   ***************/
    if (post.Code.trim() == "", post.Code.trim() == null || post.Code.trim() == undefined) {
        res.send({ state: false, message: 'The ID field is required.' });
        return false;
    }

    if (/[^\d]/.test(post.Code.trim()) == true) {
        res.send({ state: false, message: 'The ID number must not contain non-numeric characters.' })
        return false;
    }

    if (6 > post.Code.trim().length > 10) {
        res.send({ state: false, message: 'The ID number must contain 6 to 10 digits.' })
        return false;
    }

    /*********************************************/
    /**************** Check Name  ****************/
    // This field is required.
    if (post.Name.trim() == "" || post.Name.trim() == null || post.Name.trim() == undefined) {
        res.send({ state: false, message: 'The name field is required.' });
        return false;
    }
    // The field contain many spaces between names.
    if (Form.Name.MultiSpace.test(post.Name.trim()) == true) {
        res.send({ state: false, message: 'The name field contain many spaces between names.' })
        return false;
    }
    // The field must not contain numbers.
    if (Form.Name.Numbers.test(post.Name.trim()) == true) {
        res.send({ state: false, message: 'The name must not contain numbers.' })
        return false;
    }
    // The field must not contain name(s) of more than 15 characters.
    if (Math.max(...post.Name.trim().split(' ').map(p => p.length)) > 15) {
        res.send({ state: false, message: 'The name must not contain name(s) of more than 15 characters.' })
        return false;
    }
    // The field must not contain name(s) of less than 3 characters.
    if (Math.min(...post.Name.trim().split(' ').map(p => p.length)) < 3) {
        res.send({ state: false, message: 'The name must not contain name(s) of less than 3 characters.' })
        return false;
    }
    // The name must not contain special characters.
    if (Form.Name.SpecialCharacters.test(post.Name.trim()) == true) {
        res.send({ state: false, message: 'The name must not contain special characters.' });
        return false;
    }

    UsersModels.ActualizarId(post, function (Reply) {
        if (Reply.state == true) {
            res.json({ state: true, message: `The registered user with #Id ${post.Id} has been updated successfully`})
        } else {
            res.json({ state: false, message: `There is no user registered with the Id number ${post.Id}` })
        }
    })
}

UsersController.Eliminar = function (req, res) {
    var post = {
        Id: req.body.Id,
    }

    UsersModels.Eliminar(post, function (Reply) {
        if (Reply.state == true) {
            res.json({ state: true, message: `The registered user with #Id ${post.Id} has been successfully deleted`})
        } else {
            res.json({ state: false, message: 'There was an error deleting the user' })
        }
    })
}

module.exports.users = UsersController