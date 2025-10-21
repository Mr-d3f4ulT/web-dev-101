// const score = 400;
// console.log(score);

// const balance = new Number(199.8568); //We have multiple properties just like string **check in console of browser
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));
// console.log(balance.toPrecision(2));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); //put commas in bigger numbers like 10,00,000

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);

// ***************************************************************************************** MATH IN JAVASCRIPT *************************************************************************************
console.log(Math.abs(-4)); //converts negative to positive
console.log(Math.round(4.846)); //rounds of to nearest integer
console.log(Math.sqrt(4.846));
console.log(Math.pow(4.846, 3));
console.log(Math.floor(12.6)); //rounds a number down to the nearest integer.It always rounds towards negative infinity.
console.log(Math.min(1, 5, 12, 6)); //returns minimum value in given array
console.log(Math.max(1, 5, 12, 6)); //returns maximum value in given array

console.log(Math.random()); //always return random number between 0 & 1
console.log(Math.floor(Math.random()));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
