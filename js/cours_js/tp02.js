let num1 = 12;
let num2 = 34;

console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2));
console.log(num1 + ' - ' + num2 + ' = ' + (num1 - num2));
console.log(num1 + ' x ' + num2 + ' = ' + (num1 * num2));
console.log(num1 + ' / ' + num2 + ' = ' + (num1 / num2));
console.log(num1 + ' % ' + num2 + ' = ' + (num1 % num2));

if(num1 > num2) {
  console.log(num1 + ' est plus grand que ' + num2);
} else {
  console.log(num1 + ' est plus petit que ' + num2);
}

num1 = 100;
if(num1 < num2) {
  console.log(num1 + ' est plus petit que ' + num2);
} else {
  console.log(num1 + ' est plus grand que ' + num2);
}

if(num1 == num2) {
  console.log(num1 + ' est égal à ' + num2);
} else {
  console.log(num1 + ' n\'est pas égal à ' + num2);
}

num1 = 34;
if(num1 != num2) {
  console.log(num1 + ' n\'est pas égal à ' + num2);
} else {
  console.log(num1 + ' est égal à ' + num2);
}

let b1 = true;
let b2 = false;

console.log(b1 && b2); // false
console.log(b1 || b2); // true
console.log(!b1); // false
console.log(!b2); // true




