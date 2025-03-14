// complete the challenge here 👇
const garden = ['Tomato', 'Carrot', 'Lettuce', 'Cucumber', 'Pepper'];
console.log(`Initial garden: ${garden.join(',')}`);

garden.push('Pumpkin');
garden.unshift('Sunflower');
console.log(`Updated garden: ${garden.join(',')}`);
console.log('Number of plants:', garden.length);

firstRemovePlant = garden.pop();
lastRemovedPlant = garden.shift();

// Harvested: Sunflower and Pumpkin
// instead of
// Harvested: Pumpkin and Sunflower
console.log(`Harvested: ${lastRemovedPlant} and ${firstRemovePlant}`);

console.log(`Updated garden after harvest: ${garden.join(',')}`);
const cucumberIndex = garden.indexOf('Cucumber');
garden[cucumberIndex] = 'Bell Pepper';
console.log(`Replaced plant at index: ${cucumberIndex}`); // 3 instead 4
console.log(`Garden after replacement: ${garden.join(',')}`);

console.log(`Garden includes Weeds: ${garden.includes('Weeds')}`);
