const calculator = document.querySelector('.grid-box');
const display = document.querySelector('.calc-display');
const buttons = document.querySelectorAll('.btn');
const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator');
const equalsBtn = document.querySelector('[data-equals]');
const clearAllBtn = document.querySelector('#clear-all-btn');
const deleteBtn = document.querySelector('#delete-btn');
let currentCalc = document.querySelector('[data-current-calculation');
let mainDisplay = document.querySelector('[data-main-display');
let storedResult = document.querySelector('.stored-result')
let operand1 = '';
let operand2 = '';
let result = null;
let previousOperation = '';
let hasDecimal = false;

/**
 * Ajouter le nombre sur le bouton à l'affichage
 */
numberBtns.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault;
    console.log('click sur : ' + e.target.textContent);
    // prévenir double .
    if (e.target.textContent === '.' && !hasDecimal) {
      hasDecimal = true;
    } else if (e.target.textContent === '.' && hasDecimal) {
      return;
    }
    operand1 += e.target.textContent;
    mainDisplay.textContent = operand1;
  });
});

/**
 * Ajouter l'opérateur
 */
operatorBtns.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault;
    console.log('click sur : ' + e.target.textContent);
    if (!operand1) {return;}
    // mettre le . à zéro 
    hasDecimal = false;
    let operatorType = e.target.textContent;
    if (operand2 && operand1 && previousOperation) {
      calculate();
    } else {
      result = parseFloat(operand1);
    }
    resetoperand2(operatorType);
    previousOperation = operatorType;
    console.log('result : ' + result);
  });
});

/**
 * Remettre à zéro et sauvegarder le résultat
 * @param {string} operator 
 */
function resetoperand2(operator = '') {
  operand2 += operand1 + ' ' + operator + ' ';
  currentCalc.textContent = operand2;
  operand1 = '';
  storedResult.textContent = result;
}

/**
 * Calculer selon l'opérateur
 */
function calculate() {
  switch (previousOperation) {
    case 'x':
      result = parseFloat(result) * parseFloat(operand1);
      break;
    case '/':
      result = parseFloat(result) / parseFloat(operand1);
      break;
    case '+':
      result = parseFloat(result) + parseFloat(operand1);
      break;
    case '-':
      result = parseFloat(result) - parseFloat(operand1);
      break;
  }
}

/**
 * Afficher le résultat
 */
equalsBtn.addEventListener('click', (e) => {
  if (!operand2 || !operand1) return;
  // mettre le . à zéro 
  hasDecimal = false;
  // calculer puis remettre à zéro
  calculate();
  resetoperand2();
  // afficher le résultat
  mainDisplay.textContent = result;
  operand1 = result;
  operand2 = ''; 
  storedResult.textContent = '';
});

/**
 * Tout effacer
 */
clearAllBtn.addEventListener('click', (e) => {
  currentCalc.textContent = 0;
  mainDisplay.textContent = 0;
  operand2 = '';
  operand1 = '';
  result = '';
  storedResult.textContent = 0;
});

// Supprimer le nombre en cours de saisie
deleteBtn.addEventListener('click', (e) => {
  mainDisplay.textContent = 0;
  operand1 = '';
});