---
difficulty: 2
tags: codechallenge, training
chapter: "Chapter 5: Functions"
training: true
---

# Magic Wizard's Game - Functions Challenge

## Challenge Description

In this challenge, you play as a young wizard, tasked with solving number puzzles to gain magical powers. Each puzzle is infused with magic, requiring you to use your wisdom and skills to overcome challenges and unlock new abilities.

You need to write the code in the file `src/main.js`.

## Steps

1. **Magic Gem**:
   - **Description**: Seek out the strongest gem, as only the most powerful gem can aid you in defeating your foes.
   - **Function**: Implement a `getStrongestGem` function.
     - **Input**: An array of numbers.
     - **Output**: The maximum value among the input numbers.
     - **Example**: Calling `getStrongestGem([1, 5, 3])` returns `5`.

2. **Magic Boost**:
   - **Description**: Enhance your magical skills by adding numbers. The default value is 10, but you can choose other numbers for varied effects.
   - **Function**: Implement an `enhanceMagical` function.
     - **Input**: A numeric argument (default value of 10).
     - **Output**: The sum of the input number and the default value.
     - **Example**: Calling `enhanceMagical(5)` returns `15`, and `enhanceMagical(5, 20)` returns `25`.

3. **Magic Creature Challenge**:
   - **Description**: In this task, you will interact with various magical creatures. Each creature has different attributes and abilities. Your task is to calculate their power based on their attributes and make adjustments based on specific conditions.
   - `isLegendaryType` function: 
      - Create a new function named `isLegendaryType`.
       - **Input**: A type parameter.
       - **Output**: returns `true` if the type is `Legendary`, otherwise returns `false`.
   - `calculateCreaturePower` function:
      - Create a new function named `calculateCreaturePower`.
      - **Input**: An array of magical creature objects, where each object contains `name` (creature name), `strength` (base strength value), `magicLevel` (magic level), and `type` (whether the creature is legendary, a boolean value) attributes for example: 
      
      ```javascript
      [
         { name: "Dragon", strength: 50, magicLevel: 3, type: 'Legendary' }, 
         { name: "Unicorn", strength: 30, magicLevel: 5, type: 'Normal' }
      ]
      ```
      - **Output**: A new array containing each creature's name and the calculated power value. The power calculation rules are:
         - `Power = Base Strength + (Magic Level * 10)`
         - If the creature is legendary (use `isLegendaryType` function to get the result), the power value is increased by an additional 20.

## What to Expect

Your output should look similar to this:

```
8
15
25
[{"name":"Dragon","power":100},{"name":"Unicorn","power":80},{"name":"Phoenix","power":100},{"name":"Griffin","power":55},{"name":"Basilisk","power":75}]
```
Remember to download the solution to compare your code with the official solution.
