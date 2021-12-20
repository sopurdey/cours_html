const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearAll = document.querySelector('#clear-all-btn');
const del = document.querySelector('#delete-btn');
const equals = document.querySelector('.equals-btn');
const decimal = document.querySelector('.decimal-btn');
const display = document.querySelector('#display-row')

numbers.forEach(button => {
  button.addEventListener('click', () => {
    console.log('click sur : ' + button.innerText);
    let input = document.createTextNode(button.innerText);
    display.appendChild(input);

    clearAll.onclick = function () {
      display.textContent = '';
      console.log('click sur clear all');
    }
    del.onclick = function () {
      display.lastChild.remove();
      console.log('click sur delete');
    }
  });
});

