
let addition = (A,B) => A+B;
let subtraction = (A,B) => A-B;
let multiply = (A,B) => A * B;
let division = (A,B) => A / B;

let firstNum = "0";
let secondNum;
let operator;
let currentInput = "0";
let displayInput = "0";
let currentTotal;
let lastInput;
const display = document.querySelector(".currInput");
const topDisplay = document.querySelector(".inputSoFar");
display.textContent = displayInput;

const allButtons = document.querySelectorAll("button");
allButtons.forEach((button)=>{
    button.addEventListener("click", function(e){
        lastInput = (e.target).textContent;
    })
});
//This detects the last button pressed on the calculator


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

function isNum(lastInput){
    if (lastInput.includes("0123456789")){
        return true;
    }
    else {
        return false;
    }
}

function isOperator(lastInput){
    if (lastInput.includes("+*/-")){
        return true;
    }
    else {
        return false;
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
        if (typeof(operator) != 'string'){
                   
            operator = (e.target).textContent;
            firstNum = Number(currentInput);
            currentInput = "0";
            display.textContent = currentInput;
            topDisplay.textContent = firstNum + " " + operator;

        }

        else if (operator == '='){
            operator = (e.target).textContent;
            topDisplay.textContent = firstNum + " " + operator;
        }
        else{
            secondNum = Number(currentInput);
            currentInput = "0";
            currentTotal = operate(operator,firstNum,secondNum);            
            operator = (e.target).textContent;
            display.textContent = currentInput;
            topDisplay.textContent = firstNum + " " + operator + " " + secondNum + " = " + currentTotal;
            firstNum = currentTotal;
        }
    })
})

const eval = document.querySelector(".eval");
eval.addEventListener("click", function(e){
    if ((typeof(currentInput) == 'string') && (typeof(operator) != 'string') && (typeof(secondNum) != 'string')){
        operator = "=";
        currentTotal = currentInput;  
        topDisplay.textContent = currentInput;
        currentInput = "0";
        display.textContent = currentInput;
        firstNum = currentTotal;
        
    }
});



