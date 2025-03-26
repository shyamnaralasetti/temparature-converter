let textval = document.getElementById("textbox");
let Farenhiet = document.getElementById("Farenheit");
let Celcius = document.getElementById("Celcius");
let cnt = document.getElementById("content");
let temp;

function converter() {
    let inputValue = Number(textval.value);

    if (isNaN(inputValue)) {
        cnt.textContent = "Please enter a valid number.";
        return;
    }

    if (Farenhiet.checked) {
        temp = (inputValue * 9 / 5) + 32; 
        cnt.textContent = temp.toFixed(1) + " °F";
    } else if (Celcius.checked) {
        temp = (inputValue - 32) * 5 / 9; 
        cnt.textContent = temp.toFixed(1) + " °C";
    } else {
        cnt.textContent = "PLEASE SELECT CONVERSION OPTION 🤗";
    }
}
