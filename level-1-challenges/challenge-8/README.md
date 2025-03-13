---
difficulty: 2
tags: codechallenge, training
chapter: "Chapter 3: Arrays"
training: true
---

# Shopping List Game - Array Methods Challenge

## Challenge Description

In this challenge, your task is to create a shopping list game using common JavaScript array methods. You will manage the shopping list, sort and filter items, and iterate through the items etc.

You'll write code within the file `src/main.js`.

## Steps

1. Sort the shopping list alphabetically (using the `Array.prototype.sort()` function).
   - Log the sorted `shoppingList` array.

2. Filter items (using the `Array.prototype.filter()` function).
   - Create a new array containing all items that start with the letter `"m"`.
   - Log the filtered items array.

3. Iterate through items (using the `forEach` function).
   - Iterate through the shopping list and log each item's name.

4. Merge lists (using the `Array.prototype.concat()` function).
   - Create a new array `additionalItems` containing `["coffee", "tea"]`, and merge it into `shoppingList`.
   - Log the merged `shoppingList` array.

5. Check if it's an array (using the `Array.isArray` method).
   - Check if `shoppingList` is an array and log the result.

6. Slice the shopping list (using the `Array.prototype.slice()` function).
   - Create a new array `slicedItems` that contains the first three items from `shoppingList`.
   - Log the `slicedItems` array.

7. Reverse the shopping list (using the `Array.prototype.reverse()` function).
   - Reverse the `shoppingList` array.
   - Log the reversed `shoppingList` array.

> 💡 HINT: When use `console.log` to log an array, it shows the final state because it logs a reference to the array, not a snapshot of its current values. We provide a `logArrayState` function to log the current values of the array, which you can use directly to log the current state of the `shoppingList` array.

## What to Expect?

1. After sorting, the `shoppingList` array should output:
   ```
   ["banana", "bread", "butter", "egg", "milk", "orange"]
   ```

2. The filtered items array should output:
   ```
   ["milk"]
   ```

3. When iterating through items, output each item's name:
   ```
   banana
   bread
   butter
   egg
   milk
   orange
   ```

4. The merged `shoppingList` array should output:
   ```
   ["banana", "bread", "butter", "egg", "milk", "orange", "coffee", "tea"]
   ```

5. The result of checking if it's an array should be:
   ```
   true
   ```

6. The `slicedItems` array should output:
   ```
   ["banana", "bread", "butter"]
   ```

7. The reversed `shoppingList` array should output:
   ```
   ["orange", "milk", "egg", "butter", "bread", "banana"]
   ```

Remember to download the solution to compare your code with the official solution.
