// forget password page
let forgetPasswordBtn = document.getElementById("forgetPasswordBtn");
let signIn = document.querySelector("#signIn");
let titleMain = document.querySelector(".title-main");
let forgetPasswordPage = document.getElementById("forgetPasswordPage");

// email
let forgetEmailError = document.getElementById("forgetEmailError");
let forgetEmail = document.getElementById("forgetEmail");
let forgetEmailCorrect = 0;
let forgetEmailFinal = "";

// password
let forgetPasswordError = document.getElementById("forgetPasswordError");
let forgetPassword = document.getElementById("forgetPassword");
let forgetPasswordCorrect = 0;
let forgetPasswordFinal = "";

// btn
let forgetBtn = document.getElementById("forgetBtn");

forgetEmail.addEventListener("input", function () {
    let forgetEmailRegex = /^[a-zA-Z0-9.-_+]+@[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}$/;

    if (forgetEmail.value == "") {
        forgetEmailError.innerText = "Email cannot be empty";
        forgetEmailCorrect = 0;
    }
    else if (!forgetEmail.value.match(forgetEmailRegex)) {
        forgetEmailError.innerText = "Email format is incorrect";
        forgetEmailCorrect = 0;
    }
    else {
        forgetEmailError.innerText = "";
        forgetEmailFinal = forgetEmail.value;
        forgetEmailCorrect = 1;
    }
});

forgetPassword.addEventListener("input", function () {
    let forgetPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/;

    if (forgetPassword.value == "") {
        forgetPasswordError.innerText = "Password cannot be empty";
        forgetPasswordCorrect = 0;
    }
    else if (!forgetPassword.value.match(forgetPasswordRegex)) {
        forgetPasswordError.innerText = "Password length should be more than 3 and should have one uppercase and lowercase";
        forgetPasswordCorrect = 0;
    }
    else {
        forgetPasswordError.innerText = "";
        forgetPasswordFinal = forgetPassword.value;
        forgetPasswordCorrect = 1;
    }
});


forgetBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (forgetEmailCorrect == 0 || forgetPasswordCorrect == 0) {
        forgetEmailError.innerText = "Email cannot be empty";
        forgetPasswordError.innerText = "Passwords cannot be empty";
    }
    else {
        alert("You data is updated");
        localStorage.setItem("Email", forgetEmail.value);
        localStorage.setItem("Password", forgetPassword.value);
        signIn.style.display = "block";
        titleMain.innerText = "Sign In";
        forgetPasswordPage.style.display = "none";
        document.getElementById("warningMessage").style.display = "block";
    }
});

// forgetPassword 
forgetPasswordBtn.addEventListener("click", function () {
    let forgetPasswordConfirm = "Do you want to update your credentials";
    if (confirm(forgetPasswordConfirm)) {
        signIn.style.display = "none";
        titleMain.innerText = "Update you credentials";
        forgetPasswordPage.style.display = "block";
        email.value = "";
        password.value = "";
    }
});

// backToLogin
document.getElementById("backToLogin").addEventListener("click", function () {
    signIn.style.display = "block";
    titleMain.innerText = "Sign In";
    forgetPasswordPage.style.display = "none";
});

let forgetEyeOpen = document.getElementById("forgetEyeOpen");
let forgetEyeOpen2 = document.getElementById("forgetEyeOpen2");

// password
forgetEyeOpen.addEventListener("click", function () {
    forgetEyeOpen2.style.display = "block";
    this.style.display = "none";
    forgetPassword.setAttribute("type", "text");
});

forgetEyeOpen2.addEventListener("click", function () {
    this.style.display = "none";
    forgetEyeOpen.style.display = "block";
    forgetPassword.setAttribute("type", "password");
});


// password visible - toggle 
let eyeOpen = document.getElementById("eye-open");
let eyeOpen2 = document.getElementById("eye-open2");
let confirmEyeOpen = document.getElementById("confirm-eye-open");
let confirmEyeOpen2 = document.getElementById("confirm-eye-open2");
let password = document.getElementById("password");
let passwordConfirm = document.getElementById("password-confirm");

// password
eyeOpen.addEventListener("click", function () {
    eyeOpen2.style.display = "block";
    this.style.display = "none";
    password.setAttribute("type", "text");
});

eyeOpen2.addEventListener("click", function () {
    this.style.display = "none";
    eyeOpen.style.display = "block";
    password.setAttribute("type", "password");
});

// saved user
let userSelect = document.getElementById("userSelect");
let userData = document.getElementById("userData");
let email = document.getElementById("email");
let emailError = document.getElementById("email-error");
let signInBtn = document.getElementById("signInBtn");

let localStorageData = false;
let isChange = false;

if (localStorage.getItem("Terms") === "true") {
    localStorageData = true;
}

// localStorage data
let firstName = localStorage.getItem("First name");
let lastName = localStorage.getItem("Last name");
let userEmail = localStorage.getItem("Email");
let userPassword = localStorage.getItem("Password");

// check if any data is stored in localStorage or not
if (localStorageData) {
    document.getElementById("userSelectMain").style.display = "block";
    userData.innerText = `${firstName} ${lastName}`;

    // select user
    userSelect.addEventListener("change", function () {
        email.value = userEmail;
        password.value = userPassword;
        isChange = true;
        emailError.innerText = "";
        passwordError.innerText = "";
        passwordCorrect = 1;
        emailCorrect = 1;
    });
}
else {
    document.getElementById("userSelectMain").style.display = "none";
}

// email validations
let emailCorrect = 0;
let emailFinal = "";
email.addEventListener("input", function () {
    let emailRegex = /^[a-zA-Z0-9.-_+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value === "") {
        emailError.innerText = "Email cannot be empty";
        emailCorrect = 0;
    }
    else if (!email.value.match(emailRegex)) {
        emailError.innerText = "Email format is not correct";
        emailCorrect = 0;
    }
    else {
        emailError.innerText = "";
        emailFinal = email.value;
        emailCorrect = 1;
    }
});

// password validations
let passwordError = document.getElementById("password-error");
let passwordCorrect = 0;
let passwordFinal = "";
password.addEventListener("input", function () {
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/;
    if (password.value == "") {
        passwordError.innerText = "Password cannot be empty";
    }
    else if (!password.value.match(passwordRegex)) {
        passwordError.innerText = "Password length should be more than 3 and should have one uppercase and lowercase";
    }
    else {
        passwordError.innerText = "";
        passwordCorrect = 1;
        passwordFinal = password.value;
    }
});

console.log(emailFinal);
let popupMusic = new Audio("music/pop-up-music.mp3");
// submit button 
signInBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (((!email.value || !password.value) || (passwordCorrect == 0 && emailCorrect == 0))) {
        popupMusic.play();
        emailError.innerText = "";
        emailError.innerText = "Enter your email name";
        passwordError.innerText = "Enter your password name";
        password.value = "";
        email.value = "";
        return;
    }

    // if () {
    //     password.value = "";
    //     email.value = "";
    //     passwordError.innerText = "";
    //     emailError.innerText = "";
    //     alert("Enter data in all fields before submitting")
    // }

    if (email.value != userEmail || password.value != userPassword) {

        document.getElementById("ideaMessage").style.display = "block";

        if (email.value != userEmail) {
            alert("Your email is incorrect");
        }

        if (password.value != userPassword) {
            alert("Your password is incorrect");
        }
    }
    else {
        alert("You are logged in successfully");
        window.location.href = "example.html"
    }
});

// logout
let logout = document.getElementById("logout")
logout.addEventListener("click", function () {
    let confirmMessage = "Do you really want to Logout ?";

    if (confirm(confirmMessage)) {
        alert("Your data is deleted");
        localStorage.clear();
        document.getElementById("userSelectMain").style.display = "none";
        window.location.href = "index.html";
    }
})

// music Icon
let musicIconPlay = document.getElementById("musicIconPlay");
let musicIconStop = document.getElementById("musicIconStop");
let bgMusic = new Audio("music/bg-music.mp3");

musicIconPlay.addEventListener("click", function () {
    musicIconStop.style.display = "block";
    this.style.display = "none";
    bgMusic.pause()
});

musicIconStop.addEventListener("click", function () {
    this.style.display = "none";
    musicIconPlay.style.display = "block";
    bgMusic.play()
});

