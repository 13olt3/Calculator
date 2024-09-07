
let addition = (A,B) => Number(A)+Number(B);
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
    let numbers = "0123456789";
    if (numbers.includes(lastInput)){
        return true;
    }
    else {
        return false;
    }
}

function isOperator(lastInput){
    let operators = "+/-*";
    if (operators.includes(lastInput)){
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

        lastInput = (e.target).textContent;
    })    
});

const clearInput = document.querySelector("#clear");
clearInput.addEventListener("click",function(e){
    currentInput = "0";
    currentTotal = undefined;
    display.textContent = currentInput;
    topDisplay.textContent = "";
    secondNum = undefined;
    operator = undefined;
    firstNum = "0";
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
            topDisplay.textContent = currentTotal + " " + operator;
            firstNum = currentTotal;
        }
        else{
            // if(isNum(currentTotal)){

            // }
            secondNum = Number(currentInput);
            currentInput = "0";
            if ((operator == '/') && secondNum == 0){
                topDisplay.textContent = "Nice try dividing by 0.";
            }
            else{
                currentTotal = shorten(operate(operator,firstNum,secondNum));            
                
                display.textContent = currentInput;
                topDisplay.textContent = firstNum + " " + operator + " " + secondNum + " = " + currentTotal;
                operator = (e.target).textContent;
                
                firstNum = currentTotal;
            }
        }

        lastInput = (e.target).textContent;
    })


    
})

const eval = document.querySelector(".eval");
eval.addEventListener("click", function(e){

    if ((typeof(currentInput) == 'string') && (typeof(operator) != 'string') && (typeof(secondNum) != 'string')){
        operator = "=";
        currentTotal = currentInput;  
        topDisplay.textContent = firstNum + " " + operator + " " + secondNum + " = " + currentTotal;
        currentInput = "0";
        display.textContent = currentInput;
        firstNum = currentTotal;   
    }
    if ((isOperator(operator)) && (isNum(lastInput))){
        
        secondNum = currentInput;
        if ((operator == '/') && secondNum == 0){
            topDisplay.textContent = "Nice try dividing by 0.";
        }
        else{
            currentTotal = shorten(operate(operator, firstNum, secondNum));
            topDisplay.textContent = firstNum + " " + operator + " " + secondNum + " = " + currentTotal;
            currentInput = "0";
            display.textContent = currentInput;
            operator = "=";
        }
    }
    if (isOperator(lastInput)){
        topDisplay.textContent = "Error, please press a number before evaluating.";    
        currentInput = "0";        
        currentTotal = 'undefined';
        display.textContent = currentInput;            
    }
    lastInput = (e.target).textContent;


    

});

function shorten(inputNum){
    let shortNum = inputNum.toString();
    let wholeNum = shortNum;
    let decimalNum = shortNum;
    if (shortNum.includes(".")){
        let decimalPos = shortNum.indexOf('.');
        wholeNum = shortNum.substring(0, decimalPos);
        decimalNum = shortNum.substring((decimalPos+1), shortNum.length);
        while ((wholeNum.length) + (decimalNum.length) > 10 && (decimalNum.length > 2)){
            decimalNum = decimalNum.substring(0,(decimalNum.length -1));
        }
        return Number(wholeNum+"."+decimalNum);
    }
    return inputNum;

    
}



