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