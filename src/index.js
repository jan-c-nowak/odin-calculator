function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
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

function operate(operation, operandA, operandB) {
    switch (operation) {
        case "add":
            return add(operandA, operandB);
        case "subtract":
            return subtract(operandA, operandB);
        case "multiply":
            return multiply(operandA, operandB);
        case "divide":
            return divide(operandA, operandB);
        default:
            throw new Error("Invalid operation");
    }
}

let operandA;
let operandB;
let operation;
let displayValue = "";

let numpad = document.querySelector(".numpad");
let display = document.querySelector(".display");

numpad.addEventListener("click", function (event) {
    
    let caller = event.target.parentElement.parentElement;
    
    if (caller.classList.contains("operations")){
        console.log("Operator")
    }

    displayValue += event.target.innerText;

    display.innerText = displayValue;
})
