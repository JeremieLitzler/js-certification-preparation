import { userPreferences } from '../public/data';

userPreferences.forEach((preference) => {
  /*
   * 1. Recommend Beverages Based on Weather Conditions:
   * Write your code here! 👇
   */
  if (preference.temperature === 'hot') {
    console.log('Recommendation: Enjoy a hot drink!');
  } else {
    console.log('Recommendation: Enjoy a chilled sweet beverage!');
  }
});

userPreferences.forEach((preference) => {
  /*
   * 2. Use Ternary Operator to Decide Whether to Add Toppings:
   * Write your code here! 👇
   */
  console.log(preference.flavor === 'sweet' ? 'Add milk foam' : 'Add ice');
});
