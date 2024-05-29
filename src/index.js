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
let displayValue;

