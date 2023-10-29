let display = document.querySelector('#display');
let clearBtn = document.querySelector('.clear');
let backBtn = document.querySelector('.backspace');
let equalsBtn = document.querySelector('.equals');

let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let currOperator = '';

let num1 = '';
let num2 = '';

clearBtn.addEventListener('click', clear);
backBtn.addEventListener('click', backspace);

numbers.forEach((number)  => { 
    number.addEventListener('click', function() {
        updateDisplay(number.textContent);
        let displayContent = getDisplayContent();
        
        //Set the numbers appropriately based on whether or not the user has clicked an operator
        if (currOperator == '') {
            num1 = parseFloat(displayContent);
        } else {
            //Slice display at operator to get second number of the equation
            let index = displayContent.indexOf(currOperator);  
            num2 = parseFloat(displayContent.slice(index+1));
        }   
    });   
});

operators.forEach((operator) => {
    operator.addEventListener('click', function() {
        //Only allow an operator after a number has been entered
        if (num1 != '') 
        {
            //Only allow an operator if there isn't one already to prevent multiple
            if (currOperator == '') {
                currOperator = operator.textContent;
                updateDisplay(currOperator);
            } else {
                //Evaluate the displayed equation if the user clicks another operator
                //Assign the new operator to be used with the previous solution for the next equation
                operate(currOperator);  
                currOperator = operator.textContent;
                updateDisplay(currOperator);
            }
        }    
    });
});

equalsBtn.addEventListener('click', function() {
    operate(currOperator);
});

//Ensures the display is empty on start
clear();

function clear() {
    display.textContent = '';
    num1 = '';
    num2 = '';
    currOperator = '';
}

function backspace() {
    //Remove 1 character from display
    display.textContent = display.textContent.slice(0, -1);
    let currentDisplay = getDisplayContent();

    //Reassign numbers correctly based on operator status after display is changed due to backspace.
    if (currOperator == '') {
        num1 = parseFloat(currentDisplay);
    } else {
        let index = currentDisplay.indexOf(currOperator);
        num2 = parseFloat(currentDisplay.slice(index+1));
    }
}

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if (b === 0) {
        alert("Really? Can't divide by zero!");
        clear();
        return '';
    } else {
        return a / b;
    }
}

function operate(operator) {
    switch (operator) {
        case "+":
            updateEquation(add(num1, num2));
            break;
        case "-":
            updateEquation(subtract(num1, num2));
            break;
        case "*":
            updateEquation(multiply(num1, num2));
            break;
        case "/":
            updateEquation(divide(num1, num2));
            break;
        default:
            break;
    }
}

//Reset display to start with solution to the previous equation
function updateEquation(val) {
    clear();
    updateDisplay(val);
    num1 = val;
}

function updateDisplay(content) {
    display.textContent += content;
}

function getDisplayContent() {
    return display.textContent;
}