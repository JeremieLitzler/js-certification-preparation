---
difficulty: 2
tags: codechallenge, training
chapter: "Chapter 4: Control Structures"
training: true
---

# Number Processing Game - Loops Challenge

## Challenge Description

In this challenge, your task is to create a number processing game using JavaScript's loop structures to handle a predefined set of numbers. The game will perform different operations based on these numbers and output the results.

You need to write the code in the file `src/main.js`.

An array of numbers is provided; please complete the tasks accordingly.

```javascript
const numbers = [1, -2, 3, 4, -5, 6, -7, 9, 10];
```

## Steps


1. **Loop to process each number**:
   - Use a `for` loop to iterate through each number in the array.
   - For each number, if it is negative, use `continue` to skip that number.
   - For positive numbers, log "Processing number: [number]".

2. **Loop to calculate the sum**:
   - Initialize a variable `totalSum` to 0 to store the sum of all positive numbers.
   - Use a `while` loop to iterate through the array until all numbers have been processed.
   - Inside the loop, if the current number is negative, use `continue` to skip that number.
   - If it is positive, add it to `totalSum`.
   - After all loops are finished, log "The total sum of all positive numbers is: [totalSum]".


## What to Expect?


Your output should look similar to this:

```
Processing number: 1
Processing number: 3
Processing number: 4
Processing number: 6
Processing number: 9
Processing number: 10
The total sum of all positive numbers is: 33
```

Remember to download the solution to compare your code with the official solution.
