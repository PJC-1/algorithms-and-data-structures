Algorithms and Data-Structures
===================
> Learning about *Algorithms* and *Data-Structures*.

Jest
-------------
>
>A helpful article that resolves the an issue with Jest, ["Error: \`fsevents\` unavailable" on jest --watch](https://github.com/cm-pliser-tdd-by-example/tdd-by-example-js/issues/10).
>

Reverse String
-------------
> **Directions**
> *Given a string, return a new string with the reversed order of characters*
>
> **Example Output**:
> ```
> //   reverse('apple') === 'leppa'
>//   reverse('hello') === 'olleh'
>//   reverse('Greetings!') === '!sgniteerG'
> ```
>
>**How to break down this problem**
>
>*Method 1 - use of .reverse() method*
>- Turn ```str``` into an ```array```.
>- Call ```reverse``` method on the ```array```.
>- ```join``` the ```array``` back into a ```string```.
>- ```return``` the result.
>
>*Example Code*:
>```
>function reverse(str) {
>  return str.split('').reverse().join('');
>}
>```
>
>
>*Method 2 - use of for loop*
>- Create an empty string called ```reversed```.
>- ```for``` each character in the provided string. Take the character and ```add``` it to the *start* of ```reversed```.
>- ```return``` the variable ```reversed```.
>
>*Example Code*:
>```
>function reverse(str) {
>  let reversed = '';
>  for (character of str) {
>    reversed = character + reversed;
>  }
>  return reversed;
>}
>```
>
>*Notes about Method 2*:
>- It is better to use the ```for...of``` loop, rather than the basic ```for``` loop syntax. As the basic syntax can leave your code open to many places to write an error.
>- [MDN docs on for...of statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
>
>
>*Method 3 - use of reduce() helper*
>- Turn ```str``` into an ```array```.
>- Use ```reduce``` helper method, which takes accumulator, the current value, and the initial value of the accumulator as arguments.
>- Similar to *Method 2* return adding the current value to the accumulator
>- You will be returning the ```str``` is being ```split``` and then ```reduced```
>
>```
>function reverse(str) {
>  return str.split('').reduce((reversed, character) => character + reversed, '');
>}
>```
>
>*Notes on Method 3*:
>- [MDN docs on Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
>

Palindrome
-------------
> **Directions**
> *Given a string, return true if the string is a palindrome or false if it is not. Palindromes are strings that form the same word if it is reversed. Do include spaces and punctuation in determining if the string is a palindrome.*
>
> **Example Output**:
> ```
> //   palindrome("abba") === true
> //   palindrome("abcdefg") === false
> ```
>
>**How to break down this problem**
>
>*Method 1- reverse & comparison*
>- Reverse the string passed in.
>- Compare the reversed string to the original string to return a boolean value.
>
> *Example Code*:
> ```
> function palindrome(str) {
>  const reversed = str.split('').reverse().join('');
>  return str === reversed;
>}
> ```
>
>*Method 2 - use of Array.prototype.every()*
>- Use ```split()``` to convert ```str``` into an ```array```.
>- Use ```every()``` array helper to check the contents of the array and return a ```boolean```.
>
>*Example Code*:
>```
>function palindrome(str) {
>  return str.split('').every((char, i) => {
>    return char === str[str.length - i - 1];
>  });
>}
>
>```
>
>*Notes about Method 2*:
>- In this particular case, you will notice that after iterating through half the ```array``` you are doing checks that have been made already. One way to avoid doing excess checks is to ```divide``` the ```array``` ```length``` by ```2```.
>- [MDN docs on Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
>

Reverse Integer
-------------
> **Directions**
> *Given an integer, return an integer that is the reverse ordering of numbers.*
>
> **Example Output**:
> ```
> //   reverseInt(15) === 51
>//   reverseInt(981) === 189
>//   reverseInt(500) === 5
>//   reverseInt(-15) === -51
>//   reverseInt(-90) === -9
> ```
>
>**How to break down this problem**
>
>*Method 1- toString(), Math.sign(), and parseInt() *
>- Convert the passed in ```integer``` into a ```string```.
>- ```split``` the ```string``` into an ```array```.
>- ```reverse``` the ```array```.
>- ```join``` back to a ```string```.
>- convert back to an ```integer```, ```multiply``` by the ```sign``` of the passed in ```integer```, and ```return```.
>
> *Example Code*:
> ```
> function reverseInt(n) {
>  const reversed = n
>    .toString()
>    .split('')
>    .reverse()
>    .join('');
>  return parseInt(reversed) * Math.sign(n);
>}
> ```
>
> *Notes about Method 1*:
> - [MDN docs on Object.prototype.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
>- [MDN docs on Math.sign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign)
>- [MED docs on parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
