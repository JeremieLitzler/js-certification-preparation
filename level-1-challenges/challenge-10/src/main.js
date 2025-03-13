import { animals } from '../public/data';

animals.forEach((animal) => {
  /*
   * 1. Filter Animals That Are Mammals or Carnivores:
   * Write your code here! 👇
   */
  if (animal.isCarnivore || animal.isMammal) {
    console.log(animal.name);
  }
});

animals.forEach((animal) => {
  /*
   * 2. Filter Animals That Are Mammals and Not Resting:
   * Write your code here! 👇
   */
  if (animal.isMammal && !animal.isResting) {
    console.log(animal.name);
  }
});

animals.forEach((animal) => {
  /*
   * 3. Filter Animals That Are Not Carnivores:
   * Write your code here! 👇
   */
  if (!animal.isCarnivore) {
    console.log(animal.name);
  }
});
