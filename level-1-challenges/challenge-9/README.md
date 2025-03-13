---
difficulty: 2
tags: codechallenge, training
chapter: "Chapter 4: Control Structures"
training: true
---

# Beverage Recommendation Game - Conditionals Challenge

## Challenge Description

In this challenge, your task is to create a beverage recommendation game using common JavaScript conditional statements (such as `if/else`, and the ternary operator). The game will assume different user preferences and recommend suitable beverages based on the weather conditions and flavor preferences.

You'll write code within the file `src/main.js`.

We provide some user preferences; please recommend different beverages based on these.


```javascript
const userPreferences = [
      { temperature: "hot", flavor: "sweet" },
      { temperature: "cold", flavor: "bitter" },
      { temperature: "hot", flavor: "sour" },
      { temperature: "cold", flavor: "sweet" }
];
```

> 💡 HINT: The data structures in the array above are called objects and you will learn more about them later. For now, just know that you can access the data on them with a dot syntax like so: `preference.temperature` and `preference.flavor` (assuming `preference` is a single item within the array)

## Steps

1. **Recommend Beverages Based on Weather Conditions**:
   - Use `if/else` statements to check the value of `preference.temperature`.
   - If the temperature is "hot", log a recommendation for a hot drink; if the temperature is "cold", log a recommendation for a chilled beverage.

2. **Use Ternary Operator to Decide Whether to Add Toppings**:
   - Use `Ternary operator` to check the value of `preference.flavor`.
   - If the flavor is "sweet", log "Add milk foam"; otherwise, log "Add ice".

## What to Expect?

Your output should look similar to this:

```
Recommendation: Enjoy a hot drink!
Recommendation: Enjoy a chilled sweet beverage!
Recommendation: Enjoy a hot drink!
Recommendation: Enjoy a chilled sweet beverage!

Add milk foam.
Add ice.
Add ice.
Add milk foam.
```

Remember to download the solution to compare your code with the official solution.
