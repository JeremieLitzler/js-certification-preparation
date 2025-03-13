// Write your code here! 👇

// 1. Magic Gem:

function getStrongestGem(numbers) {
  const sortResult = numbers.sort((current, next) => {
    if (current > next) return 1;
    if (current == next) return 0;
    if (current < next) return -1;
  });
  console.log('sortResult', sortResult);

  return sortResult.pop();
}

// 2. Magic Boost:

function enhanceMagical(boost, defaultXp = 10) {
  return (boost ?? 0) + defaultXp;
}

// 3. Magic Creature Challenge:

const creatures = [
  { name: 'Dragon', strength: 50, magicLevel: 3, type: 'Legendary' },
  { name: 'Unicorn', strength: 30, magicLevel: 5, type: 'Normal' },
  { name: 'Phoenix', strength: 40, magicLevel: 4, type: 'Legendary' },
  { name: 'Griffin', strength: 35, magicLevel: 2, type: 'Normal' },
  { name: 'Basilisk', strength: 45, magicLevel: 1, type: 'Legendary' },
];

function isLegendaryType(type) {
  return type === 'Legendary';
}

function calculateCreaturePower(creatures) {
  return creatures.map((creature) => {
    return {
      name: creature.name,
      power:
        creature.strength +
        creature.magicLevel * 10 +
        (isLegendaryType(creature.type) ? 20 : 0),
    };
  });
}

console.log(getStrongestGem([2, 8, 5, 1]));

console.log(enhanceMagical(5));

console.log(enhanceMagical(5, 20));

console.log(calculateCreaturePower(creatures));
