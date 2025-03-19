// Add Function 
function add(num1, num2) {
    return num1 + num2;
}

// Subtract Function
function subtract(num1, num2) {
    return num1 - num2;
}

// Multiply Function
function multiply(num1, num2) {
    return num1 * num2;
}   

// Divide Function
function divide(num1, num2) {
    return num1 / num2;
}

//Operate Function
function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}





const calculationDisplay = document.querySelector('.calculationDisplay');



// Variable to store the current display value
let displayValue = "";


// Function to update display
function updateDisplay() {
    const display = document.querySelector('.display');
    display.value = displayValue;
}

// Function to display digit when button is clicked
function displayClickedDigit(digit) {
    displayValue += digit;
    updateDisplay();
}

// Get clicked value 
const digitButtons = document.querySelectorAll('.digit');
    digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        const digitButtonValue = button.textContent;
        // console.log(digitButtonValue);
        // const display = document.querySelector('.display');
        // display.value = digitButtonValue;
        displayClickedDigit(digitButtonValue);
        });
    });

// Get clicked operator 
const operatorButton = document.querySelectorAll('.operator');
    operatorButton.forEach(button => {
    button.addEventListener('click', () => {
        const operatorButtonValue = button.textContent;
        // displayClickedDigit(operatorButtonValue);
        calculationDisplay.textContent = `${displayValue} ${operatorButtonValue}`;
        })
    })

// Clear 
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    displayValue = ""; // Reset display value
    updateDisplay();   // Update the display
    calculationDisplay.textContent = "";
});


// // Add event listeners to digit buttons
// const digitButtons = document.querySelectorAll('.digit'); // Assuming digit buttons have a class 'digit'
// digitButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         displayClickedDigit(button.textContent); // Pass the button's text content (digit) to the handler
        
//     });
// });

