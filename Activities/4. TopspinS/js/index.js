/*********  FUNCTIONS ********/

function Clean_Login() {
    document.getElementById("Login_Email").value = "";
    document.getElementById("Login_Password").value = "";
    document.getElementById("Login_Message").innerHTML = "";
};

function Clean_Register() {
    var register_values = ["Reg_Name", "Reg_LastName", "Reg_Email", "Reg_Password"];
    for (var i = 0; i < register_values.length; i++) {
        document.getElementById(register_values[i]).value = "";
    };
};

function Clean_Messages() {
    var register_message = ["Reg_Message", "Name_Message", "LastName_Message", "Email_Message", "Pass_Message"];
    for (var i = 0; i < register_message.length; i++) {
        document.getElementById(register_message[i]).innerHTML = "";
    };
};
/*
function Load_Items() {
    "<div class='col-sm-6 col-md-4 col-lg-3 tt_article'>"
        "<img src='"+./Images/Blades/1.jpg+"' alt='Blades'>"
            "<div class='price btn-buy' title='Buy'>"
                "<p>U$"+191.63+"</p>"
            "</div>"
            "<div class='name-product'>"+Tibhar Kinetic Speed+"</div>"
    "</div>"
}
*/

/*********  BUTTONS ********/
$(".btn-cancel").on("click", function (event) {
    Clean_Register();
    Clean_Messages();
    document.getElementById("Register-Form").style.display = 'none';
});

$("#login-button").on("click", function (event) {
    if (document.getElementById("Login-Form").style.display === ""
        || document.getElementById("Login-Form").style.display === "none") {
        document.getElementById("Login-Form").style.display = "block";
    } else {
        document.getElementById("Login-Form").style.display = "none";
        document.getElementById("Login_Message").innerHTML = "";
        Clean_Login();
    }
});

$("#btn_register").on("click", function (event) {
    console.log(document.getElementById("Register-Form").style.display)
    if (document.getElementById("Register-Form").style.display === ""
        || document.getElementById("Register-Form").style.display === "none") {
        console.log("Entro")
        document.getElementById("Login-Form").style.display = "none";
        document.getElementById("Register-Form").style.display = "block";
    } else {
        document.getElementById("Register-Form").style.display = "none";
    }
});

$(".btn_home").on("click", function (event) {
    if (document.getElementById("home_space").style.display === "none" ||
        document.getElementById("home_space").style.display === "") {
        document.getElementById("home_space").style.display = "block"
        document.getElementById("Products").style.display = "None"
    }
});

$(".btn_blade").on("click", function (event) {
    console.log("entra")
    console.log(document.getElementById("Products").style.display)
    if (document.getElementById("Products").style.display == "" ||
        document.getElementById("Products").style.display == "none") {
        console.log("haga algo")
        document.getElementById("home_space").style.display = "none"
        document.getElementById("Products").style.display = "block"
    };
});

$(".btn_rubber").on("click", function (event) {
    if (document.getElementById("Register-Form").style.display === "none") {
        document.getElementById("Login-Form").style.display = "none";
        document.getElementById("Register-Form").style.display = "block";
    } else {
        document.getElementById("Register-Form").style.display = "none";
    }
});

$(".btn_ball").on("click", function (event) {
    if (document.getElementById("Register-Form").style.display === "none") {
        document.getElementById("Login-Form").style.display = "none";
        document.getElementById("Register-Form").style.display = "block";
    } else {
        document.getElementById("Register-Form").style.display = "none";
    }
});

$("#btn_table").on("click", function (event) {
    if (document.getElementById("Register-Form").style.display === "none") {
        document.getElementById("Login-Form").style.display = "none";
        document.getElementById("Register-Form").style.display = "block";
    } else {
        document.getElementById("Register-Form").style.display = "none";
    }
});

// When the user clicks anywhere outside of the modal, close it

for (var i = 0; i < Menu.Menu.length; i++) {
    const liElement = document.createElement('li');
    liElement.id = Menu.Menu[i];
    liElement.classList.add("nav-item");
}

/*****************  REGISTRO  ********************
******************  Variable  ********************/

$("#btn-Registered").on("click", function (event) {
    var reg_name = document.getElementById("Reg_Name").value;
    var reg_lastname = document.getElementById("Reg_LastName").value;
    var reg_email = document.getElementById("Reg_Email").value;
    var reg_password = document.getElementById("Reg_Password").value;
    if (reg_name != "" && reg_lastname != "" && reg_email != "" && reg_password != "") {
        DataBase.push({ name: reg_name.trim(), lastname: reg_lastname.trim(), email: reg_email.trim(), password: reg_password.trim() });
        localStorage.setItem("DBase", JSON.stringify(DataBase));
        Clean_Register();
        Clean_Messages();
        document.getElementById("Reg_Message").innerHTML = "Registered Successfully";
    }
    else {
        Clean_Messages();
        if (reg_name == "") {
            document.getElementById("Name_Message").innerHTML = "Please provided a name";
        }
        if (reg_lastname == "") {
            document.getElementById("LastName_Message").innerHTML = "Please provided a last name";
        }
        if (reg_email == "") {
            document.getElementById("Email_Message").innerHTML = "Please enter a valid email address";
        }
        if (reg_password == "") {
            document.getElementById("Pass_Message").innerHTML = "Please enter a valid password";
        }
    }
});

function Load_Data() {
    var Storage_DB = localStorage.getItem("DBase");
    if (Storage_DB == null) {
        DataBase = [];
    } else {
        DataBase = JSON.parse(Storage_DB);
    }
};

/*****************  LOGIN  ********************
***********************************************/
$("#btn-login").on("click", function (event) {
    var login_email = document.getElementById("Login_Email").value;
    var login_password = document.getElementById("Login_Password").value;
    if (login_email != "" && login_password != "") {
        var position = DataBase.findIndex((item) => item.email.toLowerCase() == login_email.toLowerCase() && item.password == login_password)
        if (position >= 0) {
            document.getElementById("Login_Message").style.color = "#7cfc00";
            document.getElementById("Login_Message").innerHTML = "Login Successfully";
            document.getElementById("Login_Success").innerHTML = DataBase[position].name.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
        } else if (position < 0) {
            document.getElementById("Login_Message").style.color = "#e7102df6";
            if (DataBase.findIndex((item) => item.email.toLowerCase() == login_email.toLowerCase()) >= 0) {
                document.getElementById("Login_Message").innerHTML = "Incorrect password!!";
                document.getElementById("Login_Success").innerHTML = "";
            } else {
                document.getElementById("Login_Message").innerHTML = "Unregistered email!!";
                document.getElementById("Login_Success").innerHTML = "";
            }
        }
    }
    else {
        document.getElementById("Login_Message").style.color = "#e7102df6";
        document.getElementById("Login_Message").innerHTML = "*Empty fields";
    }

});

Load_Data();

