const storedPassword = 'securePass123',
  enteredPassword = 'SecurePass123';

const compare = storedPassword === enteredPassword;

console.log(compare);

const compareLoose = storedPassword == enteredPassword;
console.log(compareLoose);

const validDiscountCode = 'SAVE20';
const userEnteredCode = 'save20';

const compareDiscount =
  validDiscountCode.toLocaleLowerCase() === userEnteredCode.toLocaleLowerCase();
console.log(compareDiscount);

const compareDiscountLoose = validDiscountCode == userEnteredCode;
console.log(compareDiscountLoose);

const cartTotalCents = 9999,
  freeShippingThresholdCents = 10000;

const orderQualifiesForFreeShipping =
  cartTotalCents >= freeShippingThresholdCents;
console.log(orderQualifiesForFreeShipping);

const cartTotalCentsEquals9999String = cartTotalCents === '9999';
console.log(cartTotalCentsEquals9999String);

const cartTotalCentsEquals9999StringLoose = cartTotalCents == '9999';
console.log(cartTotalCentsEquals9999StringLoose);

const mac = 4,
  pc = 3;
const compareNumbers = mac > pc;
console.log(compareNumbers);

const checkPc = pc <= 4;
console.log(checkPc);

const stockCount = 0,
  isOutOfStock = false;

const compareTypesLoose = stockCount == isOutOfStock;
console.log(compareTypesLoose);

const compareTypesStrict = stockCount === isOutOfStock;
console.log(compareTypesStrict);
