// Write your code here! 👇

// 1. Reverse a String:
const reverseString = function (input) {
  return input.split('').reverse().join('');
};
// 2. Capitalize First Letter:
const capitalizeFirstLetter = (input) =>
  input
    .split('')
    .map((char, index) => (index === 0 ? char.toUpperCase() : char))
    .join('');
// 3. Count Vowels in a String:
const countVowels = function (input) {
  const vowels = 'aeiouAEIOU'.split('');
  return input.split('').filter((char) => vowels.includes(char)).length;
};

console.log(reverseString('hello'));
console.log(capitalizeFirstLetter('hello world'));
console.log(countVowels('Hello, world!'));
