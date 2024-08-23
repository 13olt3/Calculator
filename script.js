
let addition = (A,B) => A+B;
let subtraction = (A,B) => A-B;
let multiply = (A,B) => A * B;
let division = (A,B) => A / B;

let firstNum = 0;
let secondNum = 0;
let operator;
let currentInput = "0";
let displayInput = "0";
const display = document.querySelector(".currInput");
display.textContent = displayInput;



function operate(operator, a ,b) {
    if (operator == "+"){
        return addition(a,b);
    }
    if (operator == "-"){
        return subtraction(a,b);
    }
    if (operator == "*"){
        return multiply(a,b);
    }
    if (operator == "/"){
        return division(a,b);
    }   
}

function updateDisplay(currentInput, buttonTextContent){
    if (Number(currentInput) == 0){
        return buttonTextContent;
    }
    else{
        return currentInput + buttonTextContent;
    }
}
const numberButtons = document.querySelectorAll(".numBtn");

numberButtons.forEach((button)=>{
    button.addEventListener("click",function(e){
        currentInput = updateDisplay(currentInput, (e.target).textContent);

        display.textContent = currentInput;
    })
});

const clearInput = document.querySelector("#clear");
clearInput.addEventListener("click",function(e){
    currentInput = "0";
    display.textContent = currentInput;
});

const operateButtons = document.querySelectorAll(".operator");
operateButtons.forEach((button)=>{
    button.addEventListener("click", function(e){
        operator = (e.target).textContent;
    })
})

