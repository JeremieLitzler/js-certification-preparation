---
difficulty: 2
tags: codechallenge, training
chapter: "Chapter 3: Arrays"
training: true
---

# Zoo Adventure Game - Arrays Challenge

## Challenge Description

In this challenge, your task is to create a zoo adventure game using basic JavaScript array operations. You will manage the animals in the zoo, add new animals, access specific animal information, calculate the number of animals, and remove animals that are no longer needed.

You'll write code within the file `src/main.js`.

## Steps

1. Create the zoo:
   - Create an array `zoo` that initially contains the following 5 animals: `["Lion", "Tiger", "Bear", "Monkey", "Giraffe"]`.
   - Log the contents of the `zoo` array.

2. Add animals:
   - Add `"Elephant"` and `"Zebra"` animals to the `zoo` array (using `Array.prototype.push()` function). 
   - Log the updated `zoo` array.

3. Access animals:
   - Access and print the name of the 3rd animal in the `zoo` array (using `array[index]` syntax).
   - Log the name of the 3rd animal.

4. Calculate the number of animals:
   - Log the total number of animals in the zoo.

5. Remove animals:
   - Remove the last animal from the `zoo` array (using `Array.prototype.pop()` function).
   - Log the updated `zoo` array.

6. Animal status:
   - Checks if a certain animal is in the zoo. (using `Array.prototype.includes()` function)
   - Log the result of the `"Elephant"` is in the zoo.

> 💡 HINT: When use `console.log` to log an array, it shows the final state because it logs a reference to the array, not a snapshot of its current values. We provide a `logArrayState` function to log the current values of the array, which you can use directly to log the current state of the zoo. (e.g. `logArrayState(zoo)`)

## What to Expect?

1. After creating the zoo, the `zoo` array should contain 5 animals and log the contents:
   ```
   ["Lion", "Tiger", "Bear", "Monkey", "Giraffe"]
   ```

2. After adding new animals, the `zoo` array should be updated and log the updated contents:
   ```
   ["Lion", "Tiger", "Bear", "Monkey", "Giraffe", "Elephant", "Zebra"]
   ```

3. When accessing the 3rd animal, it should log the name of that animal:
   ```
   Bear
   ```

4. The number of animals should be displayed correctly and log the count:
   ```
   7
   ```

5. After removing the last animal, the animal list should be updated and logged:
   ```
   ["Lion", "Tiger", "Bear", "Monkey", "Giraffe", "Elephant"]
   ```

6. Check if a certain animal is in the zoo and log the result (e.g., checking for `"Elephant"`):
   ```
   true
   ```
Remember to download the solution to compare your code with the official solution.
