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

// confirm password
confirmEyeOpen.addEventListener("click", function () {
    confirmEyeOpen2.style.display = "block";
    this.style.display = "none";
    passwordConfirm.setAttribute("type", "text");
});

confirmEyeOpen2.addEventListener("click", function () {
    this.style.display = "none";
    confirmEyeOpen.style.display = "block";
    passwordConfirm.setAttribute("type", "password");
});

// fname validations - not empty, only letters, more than 3 letters
let fname = document.getElementById("fname");
let fnameError = document.getElementById("fname-error");
let fnameCorrect = 0;
let fnameFinal = "";
fname.addEventListener('input', function () {
    let nameLettersRegex = /^[a-zA-Z]{3,}$/;
    if (fname.value == "") {
        fnameError.innerText = "Enter your name";
        fnameCorrect = 0;
    }
    else if (!fname.value.match(nameLettersRegex)) {
        fnameError.innerText = "Name can only have letters and it should be more than 3 letter";
        fnameCorrect = 0;
    }
    else {
        fnameError.innerText = "";
        fnameFinal = fname.value;
        fnameCorrect = 1;
    }
})

// lname validations - not empty, only letters, more than 3 letters
let lname = document.getElementById("lname");
let lnameCorrect = 0;
let lnameError = document.getElementById("lname-error");
let lnameFinal = "";
lname.addEventListener('input', function () {
    let nameLettersRegex = /^[a-zA-Z]{3,}$/;

    if (lname.value == "") {
        lnameError.innerText = "Enter your name";
        lnameCorrect = 0;
    }
    else if (!lname.value.match(nameLettersRegex)) {
        lnameError.innerText = "Name can only have letters and it should be more than 3 letter";
        lnameCorrect = 0;
    }
    else {
        lnameError.innerText = "";
        lnameFinal = lname.value;
        lnameCorrect = 1;
    }
})

// email - empty, format
let email = document.getElementById("email");
let emailCorrect = 0;
let emailFinal = "";
let emailError = document.getElementById("email-error");

email.addEventListener('input', function () {
    let emailFormatRegex = /^[a-zA-Z0-9.-_+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value == "") {
        emailError.innerText = "Email cannot be empty";
        emailCorrect = 0;
    }
    else if (!email.value.match(emailFormatRegex)) {
        emailError.innerText = "Email format is wrong";
        emailCorrect = 0;
    }
    else {
        emailError.innerText = "";
        emailFinal = email.value;
        emailCorrect = 1;
    }
});

// password - empty, 
let passwordError = document.getElementById("password-error");
let passwordFinal = "";
let passwordCorrect = 0;
password.addEventListener("input", function () {
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/;
    if (password.value == "") {
        passwordError.innerText = "Password cannot be empty";
        passwordCorrect = 0;
    }
    else if (!password.value.match(passwordRegex)) {
        passwordError.innerText = "Password length should be more than 3 and should have one uppercase and lowercase";
        passwordCorrect = 0;
    }
    else {
        passwordError.innerText = "";
        passwordFinal = password.value;
        passwordCorrect = 1;
    }

})

// password confirm
let passwordConfirmError = document.getElementById("password-confirm-error");
let passwordConfirmFinal = "";
let passwordConfirmCorrect = 0;
passwordConfirm.addEventListener("input", function () {
    if (passwordConfirm.value != password.value) {
        passwordConfirmError.innerText = "Confirm password should be same as password";
        passwordConfirmCorrect = 0;
    }
    else {
        passwordConfirmError.innerText = "";
        passwordConfirmFinal = passwordConfirm.value;
        passwordConfirmCorrect = 1;
    }
});

// terms 
let popupMusic = new Audio("music/pop-up-music.mp3");
let termsFinal = "";
let termsCorrect = 0;
let termsCheckBox = document.getElementById("termsCheckBox");
let termsError = document.getElementById("termsError");
termsCheckBox.addEventListener("click", function () {
    if (termsCheckBox.checked) {
        termsError.innerText = "";
        termsFinal = termsCheckBox.checked;
        termsCorrect = 1;
    }
})

// submit and storing data in localStorage
let submit = document.getElementById("submit");

submit.addEventListener("click", function (e) {
    e.preventDefault();

    // // terms checked
    if (!termsCheckBox.checked) {
        termsError.innerText = "Accept terms & Conditions";
        termsCorrect = 0;
    }

    if (fnameCorrect == 0 || lnameCorrect == 0 || emailCorrect == 0 || passwordCorrect == 0 || passwordConfirmCorrect == 0 || termsCorrect == 0) {
        popupMusic.play();
        alert("Fill all the details first before submitting");
    }
    else {
        alert("Form submitted and data successfully saved in localStorage");
        let localFname = fnameFinal;
        let localLname = lnameFinal;
        let localEmail = emailFinal;
        let localPassword = passwordFinal;
        let localTerms = termsFinal;

        localStorage.setItem("First name", localFname)
        localStorage.setItem("Last name", localLname)
        localStorage.setItem("Email", localEmail)
        localStorage.setItem("Password", localPassword)
        localStorage.setItem("Terms", localTerms)

        window.location.href = "login.html";
    }
});

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