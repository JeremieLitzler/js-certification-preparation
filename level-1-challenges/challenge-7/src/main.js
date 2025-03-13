import { logArrayState } from './log';

// Write your code here! 👇

// 1. Create the zoo:
const zoo = ['Lion', 'Tiger', 'Bear', 'Monkey', 'Giraffe'];
logArrayState(zoo);

// 2. Add animals:
zoo.push('Elephant', 'Zebra');
logArrayState(zoo);

// 3. Access animals:
logArrayState(zoo[2]);

// 4. Calculate the number of animals:
const zooCapacity = zoo.length;
console.log(zooCapacity);

// 5. Remove animals:
zoo.pop();
logArrayState(zoo);

// 6. Animal status:
const elephantInTheZoo = zoo.includes('Elephant');
console.log(elephantInTheZoo);
