---
difficulty: 1
tags: codechallenge, training
chapter: "Chapter 1: Hello JavaScript and Variables"
training: true
---

# Variables with let and const Challenge

## Challenge Description

In this challenge, you'll get acquainted with declaring, reading, and changing variables with `let` and `const`.

## Steps

1. Download the project using the button at the bottom of this page.
2. Unzip the project. 
3. Open the project in your IDE, startup the development server, and visit the page in the browser (probably[http://localhost:5173/](http://localhost:5173/))

> 💡 HINT: If you need help starting up the development server and running this challenge in the browser see the lesson "How to Startup the Coding Challenges" in Chapter 0 of this training.

> 🗒️ NOTE: From now on, we will exclude steps 1 - 3 from the challenge instructions. They can be assumed for every exercise moving forward.

4. Open the file `src/main.js`
5. Declare a variable called `name` 
   1. In real life, most times your name won't change, so define it as a variable that cannot be changed

    > 🤔 THINK: Should you use `let` or `const` ?

   2. Set it's value to your name
   3. Log the value of `name` to the console
   4. Try to update the value of `name` (maybe to some nickname you're fond of?)
   5. What happens when you run this code? (You can remove this update after answering this question)

6. Declare a variable called `age` 
   1. In real life, your age changes every year, so define it as a variable that CAN change

    > 🤔 THINK: Should you use `let` or `const` ?

   2. Set it's value to your current age
   3. Log the value of `age` to the console
   4. Update the value of age to the age you'll be on your next birthday
   5. Log the new value of `age`

## What to Expect?

- Your `name`, `age`, and updated `age` should log to the console
- When trying to set `name` to a new value you should get a `TypeError`
    ![screenshot of type error in the console](https://raw.githubusercontent.com/JavaScript-Certification/images/main/images/training/level-1/1-2/type-error.jpg)
- Setting `age` to a new value should not cause any errors

## See the solution

From now on, it will be beneficial to download the solution to each challenge to compare what you did to the official solution. You can do so with the button at the bottom of the page within the platform.
