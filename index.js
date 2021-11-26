const submitBtn = document.querySelector('#submit');
const resetBtn = document.querySelector('#reset');
const userInput = document.querySelector('#username');
const pwdInput = document.querySelector('#password');
const userSpan = document.querySelector('#usernameSpan');
const pwdSpan = document.querySelector('#pwdSpan');
const subSuccess = document.querySelector('#subSuccess');

submitBtn.addEventListener("click", (event) => {

    event.preventDefault();

    userSpan.innerHTML = "";
    pwdSpan.innerHTML = "";
    userInput.style.borderColor = "rgb(64, 50, 252)";
    pwdInput.style.borderColor = "rgb(64, 50, 252)";
    subSuccess.style.visibility = "hidden";

    if (userInput.value === "") {
        userSpan.innerHTML = "Enter Username &nbsp" + '<i class="fas fa-exclamation-triangle">' + '</i>';
        userInput.style.borderColor = "red";
    }
    if (pwdInput.value.length < 6) {
        if (pwdInput.value === "") {
            pwdSpan.innerHTML = "Enter Password &nbsp" + '<i class="fas fa-exclamation-triangle">' + '</i>';
        }
        else {
            pwdSpan.innerHTML = "Password must have atleast 6 characters &nbsp" + '<i class="fas fa-exclamation-triangle">' + '</i>';
        }
        pwdInput.style.borderColor = "red";
    }
    if (userInput.value !== "" && pwdInput.value.length >= 6) {
        subSuccess.style.visibility = "visible";
    }
})

resetBtn.addEventListener("click", () => {

    userSpan.innerHTML = "";
    pwdSpan.innerHTML = "";
    userInput.style.borderColor = "rgb(64, 50, 252)";
    pwdInput.style.borderColor = "rgb(64, 50, 252)";
    subSuccess.style.visibility = "hidden";

})