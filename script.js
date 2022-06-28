function addition(x, y) {
    return x + y;
}

function subtraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    switch (operator) {
        case '+':
            return addition(x, y);
        case '-':
            return subtraction(x, y);
        case '*':
            return multiplication(x, y);
        case '/':
            return division(x, y);
    }
}

// returns the value of a number key on the calculator as an integer
function updateDisplay(stringValue) {
    let display = document.querySelector('.display');
    display.textContent = stringValue;
}

// 
function updateValue() {
    let retValue = this.textContent;
    
    if (val1 == null) {
        val1 = retValue;
        updateDisplay(val1);
        return;
    }

    else if (val1 != null && mathOp == null) {
        val1 += retValue;
        updateDisplay(val1);
        return;
    }

    else if (mathOp != null && val2 == null) {
        val2 = retValue;
        updateDisplay(val2);
        return;
    }

    else if (mathOp != null && val2 != null) {
        val2 += retValue;
        updateDisplay(val2);
        return;
    }
    
    updateDisplay(val1);
}

// returns the operation of the key pressed
function returnOperation() {
    if (val2 == null || mathOp == null) {
        mathOp = this.textContent;
    }
}

// reset the calculator variables and display
function clearFunc() {
    val1 = 0;
    val2 = null;
    mathOp = null;
    displayValue = '0';
    updateDisplay(displayValue);
}

// when equal button is pressed, solve and update values
function equalFunc() {
    if (val1 == null || mathOp == null || val2 == null) {
        return;
    }

    let numVal1 = parseInt(val1);
    let numVal2 = parseInt(val2);
    let returnVal = 0;

    switch(mathOp) {
        case('+'):
            returnVal = addition(numVal1, numVal2);
            updateDisplay(returnVal.toString());
            break;
        case('-'):
            returnVal = subtraction(numVal1, numVal2);
            updateDisplay(returnVal.toString());
            break;
        case('*'):
            returnVal = multiplication(numVal1, numVal2);
            updateDisplay(returnVal.toString());  
            break;      
        case('/'):
            returnVal = division(numVal1, numVal2);
            updateDisplay(returnVal.toString());
            break;
    }

    clearFunc();
    val1 = returnVal;
    updateDisplay(returnVal);
}

let displayValue = '0';
updateDisplay(displayValue);
let val1 = 0;
let val2 = null;
let mathOp = null;
console.log(val1);

// add 'updateValue' to all 1-9 buttons
let numButtons = document.querySelectorAll('.numBtn');
numButtons.forEach(numButton => numButton.addEventListener('click', updateValue));

// add 'returnOperation' function to all 4 op functions (+,-,*,/) buttons
let operationButtons = document.querySelectorAll('.operationBtn');
operationButtons.forEach(operationButton => operationButton.addEventListener('click', returnOperation));

let clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', clearFunc);

let equalsBtn = document.querySelector('.equalsBtn');
equalsBtn.addEventListener('click', equalFunc);