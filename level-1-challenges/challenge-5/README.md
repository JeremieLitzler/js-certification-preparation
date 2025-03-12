---
difficulty: 2
tags: codechallenge, training, math, operators
chapter: "Chapter 2: Basic Operators"
training: true
---

# Math Challenge

## Challenge Description

In this challenge, you'll practice working with JavaScript numbers and apply various math operators and methods you've learned.

You'll write code within the file `src/main.js`

## Steps

1. Create two variables, `length` and `width`, with values 10 and 5 respectively.
   1. Calculate and log the area of the rectangle (length * width)
   2. Calculate and log the perimeter of the rectangle (2 * (length + width))

2. Create a variable `priceInCents` with value 9999 (representing $99.99).
   1. Convert `priceInCents` to dollars (divide by 100) and log it
   2. Round the dollar price to the nearest integer and log it (use `Math.round()`)
   3. Round the dollar price down to the nearest integer and log it (use `Math.floor()`)
   4. Round the dollar price up to the nearest integer and log it (use `Math.ceil()`)

> 💡 HINT: besides the operators you already read about, checkout the Math object provided by core JavaScript. You can [reference it's methods here in this MDN Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math). You don't have to remember these by heart for the exam but have a high level awareness of some of the most common methods like: floor, round, ceil, random, min, and max

3. Create a variable `quantity` with value 27.
   1. Log the result of `quantity` divided by 5
   2. Log the remainder when `quantity` is divided by 5 (use the modulo operator %)

> 💡 GOOD TO KNOW: the `%` is very useful for testing if a number is even or odd. You'll see this in the next challenge.

4. Create two variables, `a` with value 5 and `b` with value 3.
   1. Log the result of `a` raised to the power of `b` (use the exponentiation operator **)
   2. Log the square root of this result (use `Math.sqrt()`)

5. Generate a random number:
   1. Log a random number between 0 and 1 (use `Math.random()`)
   2. Log a random integer between 1 and 10 (use `Math.random()` and `Math.floor()`)

6. Demonstrate increment and decrement:
   1. Increment `a` with: `a++`
   2. Log the new value of `a`
   3. Decrement `b` with `b--`
   4. Log the new value of `b`

## What to Expect?

You should get output similar to the following (exact values may vary for random numbers):

```
50 // area of rectangle
30 // perimeter of rectangle
99.99 // price in dollars
100 // price rounded to nearest dollar
99 // price rounded down to nearest dollar
100 // price rounded up to nearest dollar
5.4 // quantity divided by 5
2 // remainder of quantity divided by 5
125 // a raised to the power of b
11.180339887498949 // square root of previous result
0.??? // random number between 0 and 1
??? // random integer between 1 and 10
6 // new value of a
2 // new value of b
```

Remember to download the solution to compare your code with the official solution.