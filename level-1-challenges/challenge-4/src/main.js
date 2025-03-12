const favoriteQuote = 'Unless things change, they remain the same';

console.log(favoriteQuote);
console.log(favoriteQuote.length);

const shoutedQuote = favoriteQuote.toLocaleUpperCase();
console.log(shoutedQuote);

const whisperQuote = favoriteQuote.toLocaleLowerCase();
console.log(whisperQuote);
console.log(whisperQuote.startsWith('to'));

const replacedQuote = favoriteQuote
  .replace('Unless', 'When')
  .replace('they remain', 'nothing is');

console.log(replacedQuote);

let trimmedQuote = favoriteQuote;
console.log(trimmedQuote);
console.log(trimmedQuote.length);
trimmedQuote = `${favoriteQuote} \n`;
console.log(trimmedQuote);
console.log(trimmedQuote.length);
