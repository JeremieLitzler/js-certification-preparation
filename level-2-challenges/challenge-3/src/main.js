const firstWord = document.head.lastElementChild.textContent;
console.log(firstWord);

const secondWord = document.body.firstChild.textContent;
console.log(secondWord);

const thirdWord = document.body.querySelector('ul').childElementCount;
console.log(thirdWord);

const lastWord = document.body.querySelector('ul').children[1].innerText;
console.log(lastWord);

const finalPieceOfTheMessage =
  document.body.querySelector('ul').nextSibling.textContent;
console.log(finalPieceOfTheMessage);
