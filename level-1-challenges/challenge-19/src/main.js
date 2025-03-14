// complete the challenge here 👇
const numbers = [23, 54, 32, 87, 47, 15, 98, 6, 63, 41];

let even = 0;
let odd = 0;
for (let index = 0; index < numbers.length; index++) {
  const number = numbers[index];
  if (number % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}
console.log(`Even numbers: ${even}`);
console.log(`Odd numbers: ${odd}`);

let low = 0;
let medium = 0;
let high = 0;
for (let index = 0; index < numbers.length; index++) {
  const number = numbers[index];
  if (number < 30) {
    low++;
  } else if (number >= 30 && number <= 70) {
    medium++;
  } else if (number > 70) {
    high++;
  }
}
console.log(`Low numbers: ${low}`);
console.log(`Medium numbers: ${medium}`);
console.log(`High numbers: ${high}`);

let sum = 0;
numbers.forEach((number) => (sum += number));
console.log(`Sum: ${sum}`);

const average = (sum / numbers.length).toFixed(2);
console.log(`Average: ${average}`);
