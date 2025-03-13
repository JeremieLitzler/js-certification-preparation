// Write your code here! 👇

const creature = {
  name: 'Phoenix',
  age: 500,
  friends: ['Dragon', 'Unicorn'],
};

// 1. Clone Your Creature:
const clone = Object.assign({}, creature);
clone.gender = 'female';
clone.friends.push('Griffin');
console.log(creature);
console.log(clone);

// 2. Merge Abilities:
const abilities = {
  fire: true,
  regeneration: true,
};
Object.assign(creature, abilities);
console.log(creature);

// 3. Deep Copy Your Creature:
const newClone = structuredClone(creature);
newClone.invisibility = true;
console.log(creature);
console.log(newClone);
