let upValueButton = document.getElementById("snk-up-value");
let downValueButton = document.getElementById("snk-down-value");
let inputValue = document.getElementById("snk-input-value")

upValueButton.addEventListener("click", upValue);
downValueButton.addEventListener("click", downValue);

function upValue() {
    inputValue.value ++; 
}

function downValue() {
    if(inputValue.value == 0) {
        inputValue;
    } else {
        inputValue.value --; 
    }
}