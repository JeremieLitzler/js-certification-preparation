// complete the challenge here 👇
const createVirtualPet = (name, species, mood) => {
  return { name, species, mood };
};

const pixel = createVirtualPet('Pixel', 'dog', 0.8);
const bitsy = createVirtualPet('Bitsy', 'cat', 0.6);
const datastream = createVirtualPet('Datastream', 'fish', 0.5);

const petSanctuary = {};
const addToSanctuary = (pet) => {
  petSanctuary[pet.name] = pet;
};

addToSanctuary(pixel);
addToSanctuary(bitsy);
addToSanctuary(datastream);

console.log(JSON.stringify(petSanctuary, null, 2));

const isPetInSanctuary = (name) => name in petSanctuary;

console.log('--Sanctuary Check--');

['Pixel', 'Glitch'].forEach((name) =>
  console.log(`${name} is in sanctuary: ${isPetInSanctuary(name)}`)
);

const generatePetReport = () => {
  console.log('--Pet Report--');
  for (const petName in petSanctuary) {
    const pet = petSanctuary[petName];
    console.log(
      `Name: ${pet.name}, Species: ${pet.species}, Mood: ${pet.mood}`
    );
  }
};

generatePetReport();

const findHappyPets = (mood) => {
  const result = [];
  for (const petKey in petSanctuary) {
    const pet = petSanctuary[petKey];
    if (pet.mood > mood) {
      result.push(pet);
    }
  }
  return result;
};

console.log('--Happy Pets--');
console.log(findHappyPets(0.7));
