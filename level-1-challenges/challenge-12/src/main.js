import { numbers } from '../public/data';

// Write your code here! 👇

// 1. Loop to process each number:
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element < 0) {
    continue;
  }

  console.log(`Processing number :${element}`);
}

// 2. Loop to calculate the sum:
let totalSum = 0;
let i = 0;
// console.log(numbers.length);
while (i < numbers.length) {
  const element = numbers[i];
  console.log(element);

  if (element < 0) {
    i++;
    continue;
  }
  totalSum += element;
  i++;
}
console.log(`The total sum of all positive numbers is: [${totalSum}]`);
