// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const arr = str.split(' ');
  const result = [];

  for (let word of arr) {
    const first = word[0].toUpperCase();
    const rest = word.slice(1);
    const whole = first + rest;
    result.push(whole);
  }

  return result.join(' ');
}

module.exports = capitalize;
