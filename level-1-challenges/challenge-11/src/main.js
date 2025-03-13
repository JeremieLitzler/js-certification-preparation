import { fruits } from '../public/data';

fruits.forEach((fruit) => {
  // Write your code here! 👇
  switch (fruit) {
    case 'Mango':
      console.log('You selected a sweet Mango!');
      break;
    case 'Apple':
    case 'Banana':
      console.log('You selected a delicious fruit!');
      break;
    case 'Lemon':
      console.log('You selected a sour Lemon!');
      break;
    default:
      console.log("Sorry, we don't have that fruit.");
      break;
  }
});
