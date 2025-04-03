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

    if (!email.value || !password.value) {
        popupMusic.play();
        alert("Enter data in all fields before login");
        return;
    }

    if (passwordCorrect == 0 && emailCorrect == 0) {
        password.value = "";
        email.value = "";
        passwordError.innerText = "";
        emailError.innerText = "";
        alert("Enter data in all fields before submitting")
    }

    if (email.value != userEmail || password.value != userPassword) {

        if (email.value != userEmail) {
            alert("Your email is incorrect");
        }

        if (password.value != userPassword) {
            alert("Your password is incorrect");
        }
    }
    else {
        alert("You are logged in successfully");
        window.location.href = "expense.html"
    }
});

// forget password
let forget = document.getElementById("forgetBtn")
forget.addEventListener("click", function () {
    let confirmMessage = "Do you really want to forget your credentials ?";

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