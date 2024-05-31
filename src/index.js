function add(a, b) {
    
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
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
let isAnswerDisplayed = true;

const numbers = document.querySelector(".numbers");
const display = document.querySelector(".display");
const operations = document.querySelector(".operations")
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

numbers.addEventListener("click", function (event) {
    if (display.innerText == operation) {
        display.innerText = "";
    }

    if (isAnswerDisplayed) {
        display.innerText = "";
        isAnswerDisplayed = false;
    }

    display.innerText += event.target.innerText;

    operation == null ? operandA = display.innerText : operandB = display.innerText;
})

operations.addEventListener("click", function (event) {
    operation = event.target.innerText;
    display.innerText = operation;
})

equal.addEventListener("click", function (event) {
    event.stopPropagation();
    try {
        display.innerText = roundAnswer(operate(operation, operandA, operandB));
        isAnswerDisplayed = true;
        operandA = "";
        operandB = "";
        operation = null;
    } catch (error) {
        display.innerText = error.message;
        isAnswerDisplayed = true;
        operandA = "";
        operandB = "";
        operation = null;
    }
})

clear.addEventListener("click", function (event) {
    display.innerText = "";
    operandA = "";
    operandB = "";
    operation = null;
})
