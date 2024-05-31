function add(a, b) {
    
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

function getLength(number) {
    return number.toString().length;
}

function operate(operation, operandA, operandB) {
    switch (operation) {
        case "+":
            return add(operandA, operandB);
        case "-":
            return subtract(operandA, operandB);
        case "*":
            return multiply(operandA, operandB);
        case "/":
            return divide(operandA, operandB);
        default:
            throw new Error("Invalid operation");
    }
}

function roundAnswer(answer) {
    getLength(answer) > 11? answer = answer.toFixed(11) : answer = answer;
    return answer;
}

let operandA = "";
let operandB = "";
let operation = null;
let displayValue = "";

let numbers = document.querySelector(".numbers");
let display = document.querySelector(".display");
let operations = document.querySelector(".operations")
let equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

numbers.addEventListener("click", function (event) {
    if (displayValue == operation) {
        displayValue = "";
    }

    displayValue += event.target.innerText;

    operation == null ? operandA = displayValue : operandB = displayValue;

    display.innerText = displayValue;
})

operations.addEventListener("click", function (event) {
    operation = event.target.innerText;
    displayValue = operation;
    display.innerText = displayValue;
})

equal.addEventListener("click", function (event) {
    event.stopPropagation();
    try {
        display.innerText = roundAnswer(operate(operation, operandA, operandB));
    } catch (error) {
        display.innerText = error.message;
    }
})

clear.addEventListener("click", function (event) {
    display.innerText = 0;
})
