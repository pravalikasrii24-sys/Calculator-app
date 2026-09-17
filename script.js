let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".buttons button");
let currentInput = "";
let previousInput = "";
let operator = "";
function calculate() {
    let num1 = Number(previousInput);
    let num2 = Number(currentInput);
    if (operator === "+") {
        return num1 + num2;
    }
    if (operator === "-") {
        return num1 - num2;
    }
    if (operator === "*") {
        return num1 * num2;
    }
    if (operator === "/") {
        return num2 === 0 ? "Error": 
        num1 / num2;
    }
    if (operator === "%") {
        return num2 === 0 ? "Error":
        num1 % num2;
    }
}
buttons.forEach(function(button){
button.addEventListener("click", function(){
    let value = button.textContent;
  if (value === "⌫") {
    currentInput = currentInput.slice(0, -1);
    display.value = previousInput + operator + currentInput;
  } else if (!isNaN(value) || value === ".") {
        currentInput += value;
        display.value = previousInput + operator + currentInput;
    }else if 
    (value === "+" || value === "-" || value === "*" || value === "/" || value === "%"){
previousInput = currentInput;
currentInput = "";
operator = value;
display.value = previousInput + operator + currentInput ;
    }
    else if (value === "=") {
        if (previousInput !== "" && currentInput !== ""){
            currentInput = String(calculate());
            display.value = currentInput;
            previousInput = "";
            operator = "";
        }
 }
 else if (value === "C") {
    currentInput = "";
    previousInput = "";
    operator = "";
    display.value = "";
 }
 else if(value === "+/-"){
    if(currentInput !== ""){
        currentInput = String(Number(currentInput) * -1);
        display.value = currentInput;
    }
 }
});
});
