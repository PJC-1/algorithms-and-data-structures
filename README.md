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
>

Max Character
-------------
> **Directions**
>*Given a string, return the character that is most commonly used in the string.*
>
>
> **Example Output**:
> ```
>// maxChar("abcccccccd") === "c"
>// maxChar("apple 1231111") === "1"
> ```
>
>**How to break down this problem**
>- You will want to convert the passed in ```string``` into an ```object```, where the ```key```s are the ```character```s and the ```value```s are the ```number``` of times that ```character``` appears in the given ```string```.
>- This concept of building a map of ```items``` seen in a given ```string```, can be used to solve many common ```string``` questions. Such as:
>1. *What is the most common character in the string?*
>2. *Does string 'A' have the same characters as string 'B' (is it an anagram)?*
>3. *Does the given string have any repeated characters in it?*
>- After building the object, we can ```iterate``` through the object and find the ```character``` with the highest ```value```.
>
>*Example Code*:
>```
>function maxChar(str) {
>  let charMap = {};
>  let max = 0;
>  let maxChar = '';
>
>  for (let char of str) {
>    if (charMap[char]) {
>      charMap[char]++;
>    } else {
>      charMap[char] = 1;
>    }
>  }
>
>  for (let char in charMap) {
>    if (charMap[char] > max) {
>      max = charMap[char];
>      maxChar = char;
>    }
>  }
>  return maxChar;
>}
>```
>
>
> **Notes**:
>- Article on [How to add a key-value pair to javascript object](https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object)
>- [MDN docs on for...in loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
>

Fizzbuzz
-------------
> **Directions**
>*Write a program that console logs the numbers from 1 to n. But for multiples of three print "fizz" instead of the number and for the multiples of fine print "buzz" For numbers which are multiples of both three and five print "fizzbuzz".*
>
> **Example Output**:
>```
>//   fizzBuzz(5);
>//   1
>//   2
>//   fizz
>//   4
>//   buzz
>```
>
>*Example Code*:
>```
>function fizzBuzz(n) {
>  for(let i = 1; i <= n; i++) {
>    if(i % 15 === 0) {
>      console.log('fizzbuzz');
>    } else if(i % 3 === 0) {
>      console.log('fizz');
>    } else if(i % 5 === 0) {
>      console.log('buzz');
>    } else {
>      console.log(i);
>    }
>  }
>}
>```
>
>*Notes*:
>- **fizzbuzz** is a good example of when a basic ```for``` loop is an appropriate choice.
>

Chunk
-------------
> **Directions**
>*Given an array and chunk size, divide the array into many subarrays where each subarray is of length size.*
>
> **Example Output**:
>```
>// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
>// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
>// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
>// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
>// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
>```
>
>**How to breakdown this problem?**:
>
>*Method 1: iterate & use the last array for logic*
>- Create empty ```array``` to hold ```chunks``` named ```chunked```.
>- ```loop``` through the passed in ```array```.
>- Cache a ```variable``` named ```last``` which hold be the last ```element``` in the ```chunked``` ```array```. *NOTE: That ```last``` is an ```array```.
>- **if** last element does not exist, ```or``` the ```length``` of the ```last``` ```array``` is equal to chunk ```size```, **then** ```push``` a new ```array``` into the ```chunked``` ```array``` containing the current element.
>- **else** add the current element into the chunk.
>
>*Example Code*:
>```
>function chunk(array, size) {
>
>  let chunked = [];
>
>  for(let item of array) {
>
>    const last = chunked[chunked.length -1];
>
>    if(!last || last.length === size) {
>
>      chunked.push([item])
>
>    } else {
>
>      last.push(item);
>    }
>
>  }
>
>  return chunked;
>}
>
>```
>
>*Method 2: use of slice()*
>- Create empty ```chunked``` ```array```.
>- Create ```index``` start at ```0```.
>- ```while``` ```index``` is ```less``` than ```array.length```.
>- **then** ```push``` a ```slice``` of ```legnth``` ```size``` from ```array``` into ```chunked```.
>- ```add``` ```size``` to ```index```.
>
>
>*Example Code*:
>```
>function chunk(array, size) {
>  const chunked = [];
>  let index = 0;
>
>  while (index < array.length) {
>    chunked.push(array.slice(index, index + size));
>    index += size;
>  }
>
>  return chunked;
>}
>```
>
>*Notes*:
>- [MDN docs on .slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
>- [MDN docs on while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
>

Anagrams
-------------
> **Directions**
>*Check to see if two provided strings are anagrams of each other. One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case.*
>
> **Example Output**:
>```
>//   anagrams('rail safety', 'fairy tales') --> True
>//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
>//   anagrams('Hi there', 'Bye there') --> False
>```
>
>*Notes*:
>- [MDN Docs on Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
>- [MDN Docs on String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
>The **`replace()`** method returns a new string with some or all matches of a `pattern` replaced by a `replacement`. The `pattern` can be a string or a [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "The RegExp constructor creates a regular expression object for matching text with a pattern."), and the `replacement` can be a string or a function to be called for each match.
>- ```\w``` flag in **regular expressions** Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to ```[A-Za-z0-9_]```.
>For example, ```/\w/``` matches "a" in "apple", "5" in "$5.28", and "3" in "3D".
>- ```g``` flag means global match; find all matches rather than stopping after the first match.
>- ```^``` Matches beginning of input. If the multiline flag is set to true, also matches immediately after a line break character.
For example,  `/^A/`  does not match the "A" in "an A", but does match the first "A" in "An A".
>- ```[^a-c]``` A negated or complemented character set. That is, it matches anything that is not enclosed in the brackets. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character set as a normal character.
For example,  `[^abc]`  is the same as  `[^a-c]`. They initially match "o" in "bacon" and "h" in "chop".
>- The ```.replace()``` and ```.toLowerCase()``` methods will be very helpful when dealing with ```string``` problems.
>*Example:*
>```
>// code snippet
>
>const word = "HI THERE!!!!!";
>word.replace(/[^\w]/g, "").toLowerCase();
>
>// output => 'hithere'
>```
>
>*Method 1 Example*:
>```
>function anagrams(stringA, stringB) {
>  const aCharMap = buildCharMap(stringA);
>  const bCharMap = buildCharMap(stringB);
>
>  if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
>    return false;
>  }
>
>  for(let char in aCharMap) {
>    if(aCharMap[char] !== bCharMap[char]) {
>      return false;
>    }
>  }
>  return true;
>}
>
>function buildCharMap(str) {
>  const charMap = {};
>  for(let char of str.replace(/[^\w]/g, "").toLowerCase()) {
>    charMap[char] = charMap[char] + 1 || 1;
>  }
>
>  return charMap;
>}
>
>```
>
>*Method 2: use of Sort()*
>- Create a helper function that will format a passed in ```string```.
>- Use ```replace(/[^\w]/g, '')``` to remove any spaces or special characters.
>- Use ```toLowerCase()``` to convert all characters to lower case.
>- Use ```split("")``` to convert the ```string``` into an ```array```.
>- Use ```sort()``` to sort the ```elements``` in the ```array```.
>- Once the ```elements``` in the ```array``` are sorted, use ```join("")``` to convert the ```array``` back to a ```string```.
>- Now that the helper function is complete, we can consider the main ```anagrams``` function. The ```anagrams``` function takes ```2``` ```strings```.
>- Create ```2``` new ```variables``` set to the helper function to format the passed in ```strings```.
>- Then ```return``` an ```expression``` of the new ```strings``` ```compared``` to each other, which will ```return``` a ```boolean``` value.
>
>*Method 2 Example*
>```
>function anagrams(stringA, stringB) {
>  return cleanString(stringA) === cleanString(stringB);
>}
>
>function cleanString(str) {
>  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
>}
>
>```
>
