---
difficulty: 2
tags: codechallenge, training
chapter: "Chapter 4: Control Structures"
training: true
---

# Animal Selection Game - Logical Operators Challenge

## Challenge Description

In this challenge, your task is to create an animal selection game using common JavaScript logical operators (such as `||`, `&&`, and `!`). The game will help you decide whether to select certain animals based on their characteristics.

You'll write code within the file `src/main.js`.

An array of animal objects is provided; please complete the tasks accordingly.

```javascript
const animals = [
    { name: "Lion", isMammal: true, isCarnivore: true, isResting: false },
    { name: "Elephant", isMammal: true, isCarnivore: false, isResting: false },
    { name: "Crocodile", isMammal: false, isCarnivore: true, isResting: true },
    { name: "Rabbit", isMammal: true, isCarnivore: false, isResting: true }
];
```

> 💡 HINT: The data structures in the array above are called objects and you will learn more about them later. For now, just know that you can access the data on them with a dot syntax like so: `animal.isMammal` and `animal.isResting` (assuming `animal` is a single item within the array)

## Steps

1. **Filter Animals That Are Mammals or Carnivores**: 
   - Use `if` statements with `||` to check if the animal is either a mammal or a carnivore.
   - Log a message indicating whether the animal can be chosen based on this condition.

2. **Filter Animals That Are Mammals and Not Resting**: 
   - Use `if` statements with `&&` to check if the animal is a mammal and not resting.
   - Log a message indicating whether the animal can be chosen based on this condition.

3. **Filter Animals That Are Not Carnivores**: 
   - Use `if` statements with `!` to check if the animal is not a carnivore.
   - Log a message indicating whether the animal can be chosen based on this condition.

## What to Expect?

Your output should look similar to this:

```
Lion
Elephant
Crocodile
Rabbit
Lion
Elephant
Elephant
Rabbit
```

Remember to download the solution to compare your code with the official solution.
