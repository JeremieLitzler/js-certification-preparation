---
difficulty: 2
tags: codechallenge, training
chapter: 'Chapter 7: Challenge Roundup'
training: true
---

# Wizard's Spellbook - Functions Challenge

## Challenge Description

As a novice wizard, you've been tasked with creating a magical spellbook. Each spell is represented by a different type of function in JavaScript. Your challenge is to create these spells (functions) and use them to perform various magical tasks.

Complete all tasks in `/src/main.js`.

## Requirements

1. Spell Declaration:

   - Declare a function named `createPotion` that takes three parameters:
     - `baseIngredient` (default: "water")
     - `catalystIngredient` (default: "moonstone dust")
     - `powerBooster` (default: "dragon breath")
   - The function should return a string describing the potion: "A mystical brew of [baseIngredient], [catalystIngredient], and [powerBooster]!"
   - The definition should be made in the function declaration syntax
   - Use this function in the following ways and log the results:
     - Call it without any arguments
     - Call it with only a base ingredient: "witch hazel"
     - Call it with a base and catalyst: "toadstool extract", "pixie wings"
     - Call it with all three ingredients: "shadow essence", "vampire tears", "phoenix ash"

2. Enchantment Expression:

   - Create a function expression named `castCharm` that takes a target's name as a parameter and returns a charming phrase.
   - The phrase should be in the format: "May luck and fortune smile upon [name]!"
   - The definition should be in the function express syntax
   - Use this function to charm "Elara the Elf" and log the result.

3. Arcane Arrow Function:

   - Create an arrow function named `calculateSpellPower` that takes a wizard's age as a parameter and returns their spell power (age multiplied by 10).
   - The definition should be in the arrow function syntax
   - Use this function to calculate and log the spell power of a 25-year-old wizard.

   ```
   Spell Power: [power]
   ```

4. Spellbook Array:

   - Create an array named `elementalSpells` containing the following spell functions: `castFireball`, `summonWaterSpout`, and `callLightning`.
   - Each function should take a power level parameter and return a string describing the spell's effect. For example:
     ```
     Fireball blazes with power [power]!
     Water spout surges with power [power]!
     Lightning strikes with power [power]!
     ```
   - Use a loop to cast each spell in the array with power levels 1 through 3, and log the results.

5. Magical Condition:

   - Create a function named `determineSpellStrength` that takes a power level as a parameter.
   - Use a conditional statement to return "Weak" if the power is less than 50, "Moderate" if it's between 50 and 100, and "Strong" if it's greater than 100.
   - Test this function with power levels 30, 75, and 150, logging the results.

6. Familiar's Task (Callback Function):
   - Create a function named `transformIngredients` that takes an array of ingredients and a transformation function as parameters.
   - The function should apply the transformation to each ingredient and return a new array with the results.
   - Call this function like so to transform an array of simple ingredients into enchanted ingredients
     ```
     //
     transformIngredients([
        'newt eyes',
        'toe of frog',
        'wool of bat',
        'tongue of dog'
     ], (ingredient) => `enchanted ${ingredient}`)
     ```
   - Log the result
