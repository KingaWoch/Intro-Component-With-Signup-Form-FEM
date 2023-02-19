const button = document.getElementById("submit");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorImg = document.getElementsByClassName(".error-img");
const error = document.getElementsByClassName(".error");


button.addEventListener("click", (e) => {
    e.preventDefault();


    checkInputs();

});

function checkInputs() {
    const pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    const emailValue = email.value;
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const passwordValue = password.value;
}

