
let addition = (A,B) => A-B;
let subtraction = (A,B) => A-B;
let multiply = (A,B) => A * B;
let division = (A,B) => A / B;

let firstNum = 0;
let secondNum = 0;
let operator;


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

