// Operator functions
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
    return b === 0 ? "Error: Division by zero" : a / b;
}
function remainder(a, b) {
    return a % b;
}

// Operate function
function operate(operator, a, b) {
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        case '%': return remainder(a, b);
        default: throw new Error(`Unsupported operator: ${operator}`);
    }
}

// Variables
let displayValue = "";
let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
let shouldResetScreen = false;

// DOM elements
const display = document.querySelector('.display');
const calculationDisplay = document.querySelector('.calculationDisplay');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');

// Update display
function updateDisplay() {
    display.value = displayValue || "0";
}

// Handle digit click
function displayClickedDigit(digit) {
    if (shouldResetScreen) {
        displayValue = "";
        shouldResetScreen = false;
    }
    displayValue += digit;
    updateDisplay();
}

// Handle operator click
function handleOperator(operator) {
    if (displayValue === "") {
        alert("Please enter a number first.");
        return;
    }

    if (firstOperand === "") {
        firstOperand = displayValue;
    } else if (currentOperator) {
        secondOperand = displayValue;
        const result = operate(currentOperator, parseFloat(firstOperand), parseFloat(secondOperand));
        displayValue = result.toString();
        firstOperand = displayValue;
        updateDisplay();
    }

    currentOperator = operator;
    calculationDisplay.textContent = `${firstOperand} ${operator}`;
    shouldResetScreen = true;
}

// Handle equals
function handleEquals() {
    if (currentOperator === null || displayValue === "") return;

    secondOperand = displayValue;
    const result = operate(currentOperator, parseFloat(firstOperand), parseFloat(secondOperand));

    displayValue = result.toString();
    updateDisplay();

    calculationDisplay.textContent = `${firstOperand} ${currentOperator} ${secondOperand} =`;
    firstOperand = "";
    secondOperand = "";
    currentOperator = null;
    shouldResetScreen = true;
}

// Clear everything
function clearAll() {
    displayValue = "";
    firstOperand = "";
    secondOperand = "";
    currentOperator = null;
    calculationDisplay.textContent = "";
    updateDisplay();
}

// Event Listeners
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayClickedDigit(button.textContent);
        calculationDisplay.textContent += button.textContent;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleOperator(button.textContent === "x" ? "*" : button.textContent);
    });
});

clearButton.addEventListener('click', clearAll);
equalsButton.addEventListener('click', handleEquals);

// Initial display update
updateDisplay();


