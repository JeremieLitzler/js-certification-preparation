---
difficulty: 2
tags: codechallenge, training
chapter: "Chapter 6: Objects"
training: true
---

# Magical Creatures Game - Objects By Reference Challenge

## Challenge Description

Welcome to the enchanting world of magical creatures! Here, brave wizards need to master the magic of object references, cloning, and merging to complete various tasks. Each task is a magical adventure, and by completing them, you will gain powerful skills and unparalleled wisdom. Are you ready? Let’s embark on this magical journey!

You need to write the code in the file `src/main.js`.

We provide a `creature` object, use it to complete the game.

```javascript
const creature = {
   name: "Phoenix",
   age: 500,
   friends: ["Dragon", "Unicorn"],
};
```

## Steps

1. **Clone Your Creature**:
   > In the magical world, you may need to create a copy of the creature. You need to clone the `creature` object.
   - Use `Object.assign()` or the spread operator to clone the `creature` object.
   - Add a `gender` property with the `value` female to the cloned `creature`.
   - Add a friend named `Griffin` to the cloned `creature`.
   - Log both the original and cloned creature objects.

2. **Merge Abilities**:
   > In this step, you will enhance your creature by merging its abilities. 
   - Create an object named `abilities` with the following properties:
     - `fire`: Set to `true`, indicating that the creature has fire abilities.
     - `regeneration`: Set to `true`, indicating that the creature has regeneration abilities.
   - Use `Object.assign()` to merge the `abilities` object into the original `creature` object (not cloned object).
   - Log the updated `creature` object.

3. **Deep Copy Your Creature**:
   > In the magical world, sometimes you need to create a deep copy of the creature. Since objects are based on references, shallow copies can lead to changes contaminating each other, so we need to deep copy the `creature` object.
   - Use the `structuredClone()` function to deep copy the original `creature` object (not cloned object).
   - Add a ability named `invisibility` with `true` value to the cloned `creature`.
   - Log both the original and deep copied creature objects.

## What to Expect?

Your output should look similar to this:

```
Original Creature: {"name":"Phoenix", "age":500, "friends":["Dragon","Unicorn","Griffin"]}
Cloned Creature: {"name":"Phoenix", "age":500, "friends":["Dragon","Unicorn","Griffin"], "gender":"female"}
Updated Creature: {"name":"Phoenix", "age":500, "friends":["Dragon","Unicorn","Griffin"], "fire":true, "regeneration":true}
Original Creature after deep copy: {"name":"Phoenix", "age":500, "friends":["Dragon","Unicorn","Griffin"], "fire":true, "regeneration":true}
Deep Copied Creature: {"name":"Phoenix", "age":500, "friends":["Dragon","Unicorn","Griffin"], "fire":true, "regeneration":true, "invisibility":true}
```

Remember to download the solution to compare your code with the official solution.
