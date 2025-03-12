// Write your code here! 👇

const length = 10;
const width = 5;

const area = length * width;
console.log(area);
const perimeter = 2 * (length + width);
console.log(perimeter);

const priceInCents = 9999;
const priceDecimal = priceInCents / 100;
console.log(priceDecimal);
const priceRound = Math.round(priceDecimal);
console.log(priceRound);
const priceFloor = Math.floor(priceDecimal);
console.log(priceFloor);
const priceCeil = Math.ceil(priceDecimal);
console.log(priceCeil);

const quantity = 27;
const quantityDivided = quantity / 5;
console.log(quantityDivided);
const quantityRemainder = quantity % 5;
console.log(quantityRemainder);

let a = 5,
  b = 3;

const aSquare = a ** b;
console.log(aSquare);
const aSquareSquareRoot = Math.sqrt(aSquare);
console.log(aSquareSquareRoot);

const random = Math.random();
console.log(random);
const randomBetween1And10 = Math.floor(Math.random() * 10);
console.log(randomBetween1And10);

const aIncrement = ++a;
console.log(aIncrement);

const bDecrement = --b;
console.log(bDecrement);
