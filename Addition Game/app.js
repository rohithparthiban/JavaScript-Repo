// Addition Game
let randomNumber1 = document.getElementById("randomNumber1");
let randomNumber2 = document.getElementById("randomNumber2");
function restart(){
    randomNumber1.value = Math.floor(Math.random(1)*100);
    randomNumber2.value = Math.floor(Math.random(1)*100);
}
function check() {
    let inputNumber = parseInt(document.getElementById("inputNumber").value);
    let totalValue = parseInt(randomNumber2.value) + parseInt(randomNumber1.value);
    if (totalValue == inputNumber) {
        let span = document.getElementById("resultMessage");
        span.innerHTML = "Congratulations! You got it right.";
        span.className = "bg-success text-white";
    }
    else {
        let span = document.getElementById("resultMessage");
        span.innerHTML = "Please Try Again!";
        span.className = "bg-primary text-white";
    }
}   