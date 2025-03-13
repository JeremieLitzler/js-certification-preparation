---
difficulty: 2
tags: codechallenge, training
chapter: "Chapter 6: Objects"
training: true
---

# Property Sprites Game - Objects Challenge

## Challenge Description

Welcome to the mysterious JavaScript kingdom! Brave adventurers must master the magic of objects to rescue the trapped property sprites. Each task is an adventure, and by completing them, you will gain powerful skills and unparalleled wisdom. Are you ready? Let’s embark on this fantastic journey!

You need to write your code in the file `src/main.js`.

## Steps

1. **Create Your Hero**:
   - Create an object named `hero` with the following properties:
     - `name`: Set the hero's name to `"Hero"`.
     - `age`: Set the hero's age to `30`.
     - `health`: Set the hero's health to `100`.
     - `damage`: Set the hero's damage to `30`.
     - `skills`: Initialize as an empty array to store skills.
   - Log the `hero` object.

2. **Handle Events**:
   > During the adventure, the hero may encounter two types of events: taking damage and learning a skill. Define two methods:
   - `takeDamage(damage)`: This function takes a parameter `damage` and decreases the `hero`'s `health`.
   - `learnSkill(skill)`: This function takes a parameter `skill` and adds the new skill to the `hero.skills` array.
   - Call `takeDamage(10)` and `learnSkill('Fireball')`, and log the updated `hero` object.

3. **Battle with Enemies**:
   > The hero needs to battle enemies. Create an object named `enemy` with the following properties:
   - `name`: Set the enemy's name, for example, `"Goblin"`.
   - `health`: Set the enemy's health, for example, `50`.
   - `damage`: Set the enemy's attack power, for example, `15`.
   - Define a `battle` function that compares the `health` and `damage` of the hero and the enemy, executing the following steps:
     - At the start of the battle, log both parties' initial health values with the following format: (`Initial health - Hero: ${hero.health}, Enemy: ${enemy.health}`).
     - Use a loop for turn-based combat until one party's `health` drops to 0 or below:
       - The hero attacks the enemy, reducing the enemy's `health` with the formula `enemy.health -= hero.damage` (assuming `hero` also has a `damage` property).
       - If the enemy is still alive, they retaliate, reducing the hero's `health` with the formula `hero.health -= enemy.damage`.
       - Log both parties' health values after each round with the following format :(`Battle status - Hero: ${hero.health}, Enemy: ${enemy.health}`).
     - After the battle ends, log the battle result with the following format('Hero has fallen!' or 'Hero wins!')


4. **Craft Magical Weapons**:
   > The hero needs powerful weapons to defeat enemies. You need to create a function that generates an object with dynamic keys and values for the weapon's properties. Use this function to create two different weapon objects.

   - Define the weapon type as `'Staff'` and the attack power as `75` for the first weapon.
   - Define the weapon type as `'Sword'` and the attack power as `100` for the second weapon.
   - Create a function named `createWeapon` that takes `type` and `damage` as parameters and returns an object with computed properties for `type` and `damage`.
   - Use the `createWeapon` function to create both weapon objects and log them.

5. **Remove Property Constraints**:
   - Remove the `age` property to ensure the hero's status remains good.
   - Log the updated `hero` object.

6. **The Secret of the Hero's Age**:
   > In this task, you will embark on a quest to uncover the secrets of the hero's properties. Create a function `revealHeroSecrets` that checks if the `name` property exists in the `hero` object and whether the `age` property is missing by using the `in` operator.
   - If the `name` exists, log `"Our hero is [name]!"`.
   - If the `age` does not exist, log `"The hero's age is a secret!"`.
   - **Requirement**: Use `in` operator to finish the task.
   - Call `revealHeroSecrets(hero)` to unveil the secrets of the hero!

> 💡 HINT: When using `console.log` to log an object, it shows the final state because it logs a reference to the object, not a snapshot of its current values. We provide a `logHero` function to log the current values of the hero, which you can use directly to log the current state of the zoo. (e.g. `logHero(hero)`)

## What to Expect?

Your output should look similar to this:

```
{"name":"Hero","age":30,"health":100,"damage":30,"skills":[]}
{"name":"Hero","age":30,"health":90,"damage":30,"skills":["Fireball"]}
Initial health - Hero: 90, Enemy: 50
Battle status - Hero: 75, Enemy: 20
Battle status - Hero: 75, Enemy: -10
Hero wins!
{Staff: 75}
{Sword: 100}
{"name":"Hero","health":75,"damage":30,"skills":["Fireball"]}
Our hero is Hero!
The hero's age is a secret!
```

Remember to download the solution to compare your code with the official solution.
