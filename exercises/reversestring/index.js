// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;

// Method 1
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// Method 2
// function reverse(str) {
//   let reversed = '';
//   for (character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }
