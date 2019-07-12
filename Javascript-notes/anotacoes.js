
// List of falsy values

// 0
// Empty strings like "" or ''
// null which represent when there is no value at all
// undefined which represent when a declared variable lacks a value
// NaN, or Not a Number

================================================================================================

// Short circuit evaluation
let tool = '';

// Nesse exemplo se a variável tool tem um valor falso, a variável tool recebe o valor 'pen'
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);
// A executar o programa o resultado será 'The pen is mightier than the sword.'

================================================================================================

// Ternary Operator
let isNightTime = true;

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// The condition, isNightTime, is provided before the ?.
// Two expressions follow the ? and are separated by a colon :.
// If the condition evaluates to true, the first expression executes.
// If the condition evaluates to false, the second expression executes.

================================================================================================

// Switch Case
let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
// Prints 'Papayas are $1.29'