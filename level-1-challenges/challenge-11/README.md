---
difficulty: 2
tags: codechallenge, training
chapter: "Chapter 4: Control Structures"
training: true
---

# Fruit Selection Game - Switch Statements Challenge

## Challenge Description

In this challenge, your task is to create a fruit selection game using JavaScript's `switch` statement to determine the type of fruit selected by the user. The game will output different messages based on the user's input.

You will write code within the file `src/main.js`.

An array of fruit objects is provided; please complete the tasks accordingly.

```javascript
const fruits = ["Mango", "Apple", "Lemon", "Banana"];
````

## Steps

- Use a `switch` statement to handle different fruits and use `break` to end each `case` execution.
- For "Mango" fruit, log "You selected a sweet Mango!"
- For "Apple" or "Banana" fruit, log "You selected a delicious fruit!"
- For "Lemon" fruit, log "You selected a sour Lemon!"
- For any other fruits (such as "Orange" or "Grapes"), log "Sorry, we don't have that fruit."
- For certain fruits (like Apple and Banana), you can group `case` statements to simplify the code.

## What to Expect?

Your output should look similar to this:

```
You selected a sweet Mango!
You selected a delicious fruit!
You selected a sour Lemon!
You selected a delicious fruit!
Sorry, we don't have that fruit.
Sorry, we don't have that fruit.
```

Remember to download the solution to compare your code with the official solution.
