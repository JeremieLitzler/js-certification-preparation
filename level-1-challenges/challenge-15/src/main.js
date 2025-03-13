import { logHero } from './log';

// Write your code here! 👇

// 1. Create Your Hero:

const hero = { name: 'Hero', age: 30, health: 100, damage: 30, skills: [] };

logHero(hero);

// 2. Handle Events:

function takeDamage(damage) {
  hero.health -= 10;
}

function learnSkill(skill) {
  hero.skills.push(skill);
}

takeDamage(10);
learnSkill('Fireball');

logHero(hero);

// 3. Battle with Enemies:
const enemy = { name: 'Goblin', health: 50, damage: 15 };

function battle() {
  console.log(`Initial health - Hero: ${hero.health}, Enemy: ${enemy.health}`);
  while (hero.health > 0 && enemy.health > 0) {
    // debugger;
    if (hero.health < 0 || enemy.health < 0) break;

    enemy.health -= hero.damage;
    if (enemy.health > 0) hero.health -= enemy.damage;

    console.log(`Battle status - Hero: ${hero.health}, Enemy: ${enemy.health}`);
  }
  console.log(hero.health <= 0 ? 'Hero has fallen!' : 'Hero wins!');
}

battle();

// 4. Craft Magical Weapons:

function createWeapon(type, power) {
  return { [type]: power };
}

console.log(createWeapon('Staff', 75));
console.log(createWeapon('Sword', 100));

// 5. Remove Property Constraints:
delete hero.age;
logHero(hero);

// 6. The Secret of the Hero's Age:

function revealHeroSecrets(hero) {
  if ('name' in hero) console.log(`Our hero is ${hero.name}!`);
  if (!('age' in hero)) console.log("The hero's age is a secret!");
}

revealHeroSecrets(hero);
