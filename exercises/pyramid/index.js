// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


function pyramid(n, row = 0, level = '') {
  if(row === n) {
    return;
  }
  const columnTotal = 2 * n - 1;
  const midpoint = Math.floor(columnTotal/2);

  if(level.length === columnTotal) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const symbolAdd = (level.length >= midpoint - row && level.length <= midpoint + row) ? '#' : ' ';
  pyramid(n, row, level + symbolAdd);
}



// function pyramid(n) {
//   const columnTotal = 2 * n - 1;
//   const midpoint = Math.floor(columnTotal/2);
//
//   for(let row = 0; row < n; row++) {
//     let level = '';
//     for(let column = 0; column < columnTotal; column++) {
//       if(column >= midpoint - row && column <= midpoint + row) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

module.exports = pyramid;
