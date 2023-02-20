const button = document.getElementById("submit");
const inputs = document.getElementsByTagName("input");
const email = document.getElementById("email");
const errorImg = document.getElementsByClassName("error-img");
const error = document.getElementsByClassName("error");


button.addEventListener("click", (e) => {
    e.preventDefault();

});

function checkInputs() {
    for ( let i = 0; i < inputs.length; i++ ) {
        inputs[i].addEventListener("blur", function () {
            if (!this.value) {
                this.classList.add("invalid");
                error[i].classList.add("visible");
                errorImg[i].classList.add("visible");
            } else {
                this.classList.remove("invalid");
                error[i].classList.remove("visible");
                errorImg[i].classList.remove("visible");
            }
        })
    }
}

checkInputs();

