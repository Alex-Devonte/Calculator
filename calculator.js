let display = document.querySelector('#display');
let clearBtn = document.querySelector('.clear');
let backBtn = document.querySelector('.backspace');

clearBtn.addEventListener('click', clear);
backBtn.addEventListener('click', backspace);

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



