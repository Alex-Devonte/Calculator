let display = document.querySelector('#display');
let clearBtn = document.querySelector('.clear');
let backBtn = document.querySelector('.backspace');

let numbers = document.querySelectorAll('.number');

clearBtn.addEventListener('click', clear);
backBtn.addEventListener('click', backspace);

numbers.forEach((number)  => { 
    number.addEventListener('click', function() {
        console.log(number.textContent);
        display.textContent += number.textContent;
    });
    
});

function clear() {
    display.textContent = '';
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1);
}

function add() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}



