// complete the challenge here 👇

function createPotion(
  baseIngredient = 'water',
  catalystIngredient = 'moonstone dust',
  powerBooster = 'dragon breath'
) {
  return `A mystical brew of ${baseIngredient}, ${catalystIngredient}, and ${powerBooster}!`;
}

console.log(createPotion());
console.log(createPotion('witch hazel'));
console.log(createPotion('toadstool extract', 'pixie wings'));
console.log(createPotion('shadow essence', 'vampire tears', 'phoenix ash'));

const castCharm = function (name) {
  return `May luck and fortune smile upon ${name}!`;
};

console.log(castCharm('Elara the Elf'));

const calculateSpellPower = (age) => {
  return age * 10;
};

console.log(calculateSpellPower(25));

const castFireball = (power) => `Fireball blazes with power ${power}!`,
  summonWaterSpout = (power) => `Water spout surges with power ${power}!`,
  callLightning = (power) => `Lightning strikes with power ${power}!`;
const elementalSpells = [castFireball, summonWaterSpout, callLightning];

for (let index = 0; index < elementalSpells.length; index++) {
  const func = elementalSpells[index];
  console.log(func(index + 1));
}

const determineSpellStrength = (power) => {
  if (power < 50) {
    return 'Weak';
  } else if (power >= 50 && power <= 100) {
    return 'Moderate';
  } else {
    return 'Strong';
  }
};

[30, 75, 150].forEach((power) => console.log(determineSpellStrength(power)));

const transformIngredients = (ingredients, transformFunc) => {
  return ingredients.map((ingredient) => transformFunc(ingredient));
};

const result = transformIngredients(
  ['newt eyes', 'toe of frog', 'wool of bat', 'tongue of dog'],
  (ingredient) => `enchanted ${ingredient}`
);

console.log(result);
