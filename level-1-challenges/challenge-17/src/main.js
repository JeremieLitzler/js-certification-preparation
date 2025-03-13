// Spaceship Initialization
let fuelLevel = 100;
let oxygenLevel = 100;
const crewMembers = 5;
let alienEncounters = 0;
let distanceTraveled = 0;

// 1. Get Going:
distanceTraveled = 70;

// 2. Resource Management:
const fuelReductions = distanceTraveled / 10;
fuelLevel -= 5 * fuelReductions;
console.log(
  `Fuel reductions: ${fuelReductions}, Current fuel level: ${fuelLevel}`
);

console.log(`Fuel is low: ${fuelLevel <= 30}`);

// 3. Oxygen Consumption:
const oxygenConsumed = 1 * crewMembers * (distanceTraveled / 100);
oxygenLevel -= oxygenConsumed;
console.log(`New oxygen level ${oxygenLevel}`);
console.log(`Oxygen is low: ${oxygenLevel < 20}`);

// 4. Alien Encounters
console.log('Crew encountered aliens:', distanceTraveled % 2 !== 0);

// ignore this (it's useful for unit tests)
window.distanceTraveled = distanceTraveled;
