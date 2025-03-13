import { logArrayState } from './log';

const shoppingList = ['banana', 'egg', 'milk', 'bread', 'orange', 'butter'];

// Write your code here! 👇

// 1. Sort the shopping list:
const shoppingListSorted = shoppingList.sort((current, next) =>
  current.localeCompare(next)
);
logArrayState(shoppingListSorted);

// 2. Filter items:
const shoppingListFiltered = shoppingList.filter((item) =>
  item.startsWith('m')
);
logArrayState(shoppingListFiltered);

// 3. Iterate through items:
shoppingList.forEach((item) => console.log(item));

// 4. Merge lists:
const additionalItems = ['coffee', 'tea'];
const newShoppingList = shoppingList.concat(additionalItems);
logArrayState(newShoppingList);

// 5. Check if it's an array:
const isArray = Array.isArray(shoppingList);
console.log(isArray);

// 6. Slice the shopping list:
const slicedItems = shoppingList.slice(0, 3);
logArrayState(slicedItems);

// 7. Reverse the shopping list:
shoppingList.reverse();
logArrayState(shoppingList);
