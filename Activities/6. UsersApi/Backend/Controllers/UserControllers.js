var UserModels = require(__dirname + '/../Models/UserModels.js').users
var UserController = {

}

var RegValue = {
    CapitaLetter: /[A-ZÑ]/,                   // Capital Letter - No Acent
    LowercaseLetter: /[a-zñ]/,                // Lowercase Letter - No Acent
    WordCharacters: /[A-ÿ]/,                   // Word Characters
    AcentCharacters: /À-ÿ/,                    // Acent Characters
    SpecialCharacters: /[!-/:-@\[-`\{-~¿¡°]/,  // Special Characters
    Numbers: /\d/,                             // Numbers Characters
    MultiSpace: /[\s]{2,}/                      // Multi-Space characters
}
var RegForm = {
    Id: /^[\d]{6,10}/,
    Name: /^([A-ÿ]{3,15}\s?){1,3}$/, // Max 3 nouns of [3-15] characters long, 1 space.
    Phone: /^(60[1-8]|30[0-5]|31[0-9]|32[0-4]|333|35[0-1])[\d]{7}$/, // Phone numbers in Colombia
    Age: /^(1([8-9]|1\d|20)|[2-9]\d)$/, // Age 18 - 120
    MaritalStatus: /(SOLTER(O|A)|CASAD(O|A)|SEPARAD(O|A)|DIVORCIAD(O|A)|VIUD(O|A))/i,
    Address: /^((?!^[\d#\-\s])[A-ZÑ\d#\-\s])*$/i,
    Email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    Password: /^[A-z!-/:-@\[-`\{-~Ññ¿¡°\d]{8,32}$/,
}



//CRUD
/********************************************************************************************************/
/************************************       CREATE USER      ********************************************/
/********************************************************************************************************/
UserController.SaveUser = function (req, res) {
    var post = {
        Id: req.body.Cedula,
        Name: req.body.Name,
        LastName: req.body.LastName,
        Address: req.body.Address,
        Phone: req.body.Phone,
        Age: req.body.Age,
        MaritalStatus: req.body.Marital
    }

    /*********************************************/
    /****************  Check ID   ****************/
    if (post.Id.trim() == ""  || post.Id.trim() == null || post.Id.trim() == undefined) {
        res.send({ state: false, message: 'The ID field is required.' });
        return false;
    }

    if (/[^\d]/.test(post.Id.trim()) == true) {
        res.send({ state: false, message: 'The ID number must not contain non-numeric characters.' })
        return false;
    }

    if (6 > post.Id.trim().length > 10) {
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
    if (RegValue.MultiSpace.test(post.Name.trim()) == true) {
        res.send({ state: false, message: 'The name field contain many spaces between names.' })
        return false;
    }
    // The field must not contain numbers.
    if (RegValue.Numbers.test(post.Name.trim()) == true) {
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
    if (RegValue.SpecialCharacters.test(post.Name.trim()) == true) {
        res.send({ state: false, message: 'The name must not contain special characters.' });
        return false;
    }

    /*********************************************/
    /************** Check LastName  **************/
    // This field is required.
    if (post.LastName.trim() == "" || post.LastName.trim() == null || post.LastName.trim() == undefined) {
        res.send({ state: false, message: 'The lastname field is required.' });
        return false;
    }
    // The field contain many spaces between names.
    if (RegValue.MultiSpace.test(post.LastName.trim()) == true) {
        res.send({ state: false, message: 'The lastname field contain many spaces between names.' })
        return false;
    }
    // The field must not contain numbers.
    if (RegValue.Numbers.test(post.LastName.trim()) == true) {
        res.send({ state: false, message: 'The lastname must not contain numbers.' })
        return false;
    }
    // The field must not contain name(s) of more than 15 characters.
    if (Math.max(...post.LastName.trim().split(' ').map(p => p.length)) > 15) {
        res.send({ state: false, message: 'The lastname must not contain Lastname(s) of more than 15 characters.' })
        return false;
    }
    // The field must not contain name(s) of less than 3 characters.
    if (Math.min(...post.LastName.trim().split(' ').map(p => p.length)) < 3) {
        res.send({ state: false, message: 'The name must not contain Lastname(s) of less than 3 characters.' })
        return false;
    }
    // The name must not contain special characters.
    if (RegValue.SpecialCharacters.test(post.LastName.trim()) == true) {
        res.send({ state: false, message: 'The lastname must not contain special characters.' });
        return false;
    }

    /*********************************************/
    /*********** Check Address **************/
    if (post.Address.trim() == ""  || post.Address.trim() == null || post.Address.trim() == undefined) {
        res.send({ state: false, message: 'The field is required.' });
        return false;
    }

    /*********************************************/
    /*********** Check Phone Number **************/
    if (post.Phone.trim() == ""  || post.Phone.trim() == null || post.Phone.trim() == undefined) {
        res.send({ state: false, message: 'The field is required.' });
        return false;
    }
    // Check number of digits of the phone number
    if (post.Phone.trim().length != 10) {
        res.send({ state: false, message: 'Enter a 10 digit phone number' })
        return false;
    }
    if (/[^\d]/.test(post.Phone.trim()) == true) {
        res.send({ state: false, message: 'The phone number must not contain non-numeric characters.' })
        return false;
    }

    /*********************************************/
    /**************  Check Age  ******************/
    if (post.Age.trim() == "" || post.Age.trim() == null || post.Age.trim() == undefined) {
        res.send({ state: false, message: 'The field is required.' });
        return false;
    }
    if (/[^\d]/.test(post.Age.trim()) == true) {
        res.send({ state: false, message: 'The age must not contain non-numeric characters.' })
        return false;
    }
    // Check-up of legal age
    if (parseInt(post.Age.trim()) < 18) {
        res.send({ state: false, message: 'Sorry, under 18s are not allowed' })
        return false;
    }
    // Check max age allowed
    if (parseInt(post.Age.trim()) > 120) {
        res.send({ state: false, message: 'Please, enter a valid age range.' })
        return false;
    }

    /**********************************************/
    /*********** Check Marital Status *************/
    if (post.MaritalStatus.trim() == ""  || post.MaritalStatus.trim() == null || post.MaritalStatus.trim() == undefined) {
        res.send({ state: false, message: 'The field is required.' });
        return false;
    }
    // Check
    if (RegForm.MaritalStatus.test(post.MaritalStatus) == false) {
        res.send({ state: false, message: 'The value received in the marital status field is not correct.' })
        return false;
    }

    UserModels.SaveUser(post, function (RTA) {
        res.json(RTA)
    })
}

/********************************************************************************************************/
/************************************    LIST USER BY CC     ********************************************/
/********************************************************************************************************/
UserController.ListByCC = function (req, res) {
    var post = {
        Id: req.body.Cedula
    }

    /*********************************************/
    /****************  Check ID   ****************/
    if (post.Id.trim() == ""  || post.Id.trim() == null || post.Id.trim() == undefined) {
        res.send({ state: false, message: 'The ID field is required.' });
        return false;
    }

    if (/[^\d]/.test(post.Id.trim()) == true) {
        res.send({ state: false, message: 'The ID number must not contain non-numeric characters.' })
        return false;
    }

    if (6 > post.Id.trim().length > 10) {
        res.send({ state: false, message: 'The ID number must contain 6 to 10 digits.' })
        return false;
    }

    if (userData.length==0){
        res.send({ state: false, message: 'There are no registered users' })
        return false;
    }

    var loc = userData.findIndex((item) => item.Id == post.Id)
    if (loc == -1) {
        res.send({ state: false, message: `There is no user registered with the Id number ${post.Id}` })
        return false;
    }

    post.loc = loc
    UserModels.ListByCC(post, function(RTA){
        res.json(RTA)
    })
}

/********************************************************************************************************/
/**********************************    UPDATE USER BY CC     ********************************************/
/********************************************************************************************************/
UserController.UpdateByCC= function (req, res) {
    var post = {
        Id: req.body.Cedula,
        Address: req.body.Address,
        Phone: req.body.Phone,
        Age: req.body.Age,
        MaritalStatus: req.body.Marital
    }

    /*********************************************/
    /****************  Check ID   ****************/
    if (post.Id.trim() == ""  || post.Id.trim() == null || post.Id.trim() == undefined) {
        res.send({ state: false, message: 'The ID field is required.' });
        return false;
    }

    if (/[^\d]/.test(post.Id.trim()) == true) {
        res.send({ state: false, message: 'The ID number must not contain non-numeric characters.' })
        return false;
    }

    if (6 > post.Id.trim().length > 10) {
        res.send({ state: false, message: 'The ID number must contain 6 to 10 digits.' })
        return false;
    }

    /*********************************************/
    /*********** Check Address **************/
    if (post.Address.trim() == ""  || post.Address.trim() == null || post.Address.trim() == undefined) {
        res.send({ state: false, message: 'The field is required.' });
        return false;
    }

    /*********************************************/
    /*********** Check Phone Number **************/
    if (post.Phone.trim() == ""  || post.Phone.trim() == null || post.Phone.trim() == undefined) {
        res.send({ state: false, message: 'The field is required.' });
        return false;
    }
    // Check number of digits of the phone number
    if (post.Phone.trim().length != 10) {
        res.send({ state: false, message: 'Enter a 10 digit phone number' })
        return false;
    }
    if (/[^\d]/.test(post.Phone.trim()) == true) {
        res.send({ state: false, message: 'The phone number must not contain non-numeric characters.' })
        return false;
    }


    /*********************************************/
    /**************  Check Age  ******************/
    if (post.Age.trim() == ""  || post.Age.trim() == null || post.Age.trim() == undefined) {
        res.send({ state: false, message: 'The field is required.' });
        return false;
    }
    if (/[^\d]/.test(post.Age.trim()) == true) {
        res.send({ state: false, message: 'The age must not contain non-numeric characters.' })
        return false;
    }
    // Check-up of legal age
    if (parseInt(post.Age.trim()) < 18) {
        res.send({ state: false, message: 'Sorry, under 18s are not allowed' })
        return false;
    }
    // Check max age allowed
    if (parseInt(post.Age.trim()) > 120) {
        res.send({ state: false, message: 'Please, enter a valid age range.' })
        return false;
    }

    /**********************************************/
    /*********** Check Marital Status *************/
    if (post.MaritalStatus.trim() == "" || post.MaritalStatus.trim() == null || post.MaritalStatus.trim() == undefined) {
        res.send({ state: false, message: 'The field is required.' });
        return false;
    }
    // Check
    if (RegForm.MaritalStatus.test(post.MaritalStatus) == false) {
        res.send({ state: false, message: 'The value received in the marital status field is not correct.' })
        return false;
    }

    if (userData.length==0){
        res.send({ state: false, message: 'There are no registered users' })
        return false;
    }

    var loc = userData.findIndex((item) => item.Id == post.Id)
    if (loc == -1) {
        res.send({ state: false, message: `There is no user registered with the Id number ${post.Id}` })
        return false;
    }

    post.loc = loc
    UserModels.UpdateByCC(post, function(RTA){
        res.json(RTA)
    })
}

/********************************************************************************************************/
/************************************   DELETE USER BY CC    ********************************************/
/********************************************************************************************************/
UserController.DeleteByCC = function (req, res) {
    var post = {
        Id: req.body.Cedula
    }

    /*********************************************/
    /****************  Check ID   ****************/
    if (post.Id.trim() == ""  || post.Id.trim() == null || post.Id.trim() == undefined) {
        res.send({ state: false, message: 'The ID field is required.' });
        return false;
    }

    if (/[^\d]/.test(post.Id.trim()) == true) {
        res.send({ state: false, message: 'The ID number must not contain non-numeric characters.' })
        return false;
    }

    if (6 > post.Id.trim().length > 10) {
        res.send({ state: false, message: 'The ID number must contain 6 to 10 digits.' })
        return false;
    }
    
    if (userData.length==0){
        res.send({ state: false, message: 'There are no registered users' })
        return false;
    }

    var loc = userData.findIndex((item) => item.Id == post.Id)
    if (loc == -1) {
        res.send({ state: false, message: `There is no user registered with the Id number ${post.Id}` })
        return false;
    }

    post.loc = loc
    UserModels.DeleteByCC(post, function(RTA){
        res.json(RTA)
    })
}

module.exports.users = UserController