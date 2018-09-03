Algorithms and Data-Structures
===================
> Learning about *Algorithms* and *Data-Structures* from **Stephen Grider's** *Udemy* course: [The Coding Interview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/).
>

debugger
-------------
>
>[MDN web documentation on debugger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
>
>The **debugger statement** invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.
>
>When using the **debugger**, you will need to explicitly call the function.
>**Example snippet**:
>```
>// exercises/reversestring/index.js
>
>function reverse(str) {
>  debugger;
>  return str.split('').reduce((rev, char) => char + rev, '');
>}
>
>reverse('abcd');
>```
>
>From the *terminal*, ```cd``` into the specific exercises directory, and run the command ```node inspect index.js```.
>**Example running the debugger from the terminal**:
>```
>$ cd reversestring/
>$ node inspect index.js
>< Debugger listening on ws://127.0.0.1:9229/2b9fd41c-f67c-441e-81ef-bc9fd50f008a
>< For help, see: https://nodejs.org/en/docs/inspector
>< Debugger attached.
>Break on start in index.js:1
>> 1 (function (exports, require, module, __filename, __dirname) { // --- Directions
>2 // Given a string, return a new string with the reversed
>3 // order of characters
>debug>
>```
>
>Now that the file is started in *debugger mode*, it has *paused* execution on the very first line of the file and is *ready* to *inspect* the code.
>
>You can enter ```cont``` (which stands for *continue*, and can be ran as ```c``` for short-hand) into the console to resume execution the code.
>
>Use the command ```repl``` which will start up a **javascript console**, where you can start to inspect *variables* that exists inside of our codebase.
>Example:
>```
>debug> repl
>Press Ctrl + C to leave debug repl
>> str
>'abcd'
>>
>```
>

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
>- The ```reduce()``` method reduces the array to a single value.
>- The ```reduce()``` method executes a provided function for each value of the array (*from left-to-right*).
>- The return value of the function is stored in an accumulator (*result/total*).
>- **Note**: ```reduce()``` does not execute the function for array elements without values.
>
>**reduce() example**:
>```
>const array1 = [1, 2, 3, 4];
>const reducer = (accumulator, currentValue) => accumulator + currentValue;
>
>// 1 + 2 + 3 + 4
>console.log(array1.reduce(reducer));
>// expected output: 10
>
>// 5 + 1 + 2 + 3 + 4
>console.log(array1.reduce(reducer, 5));
>// expected output: 15
>```
>
>
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
> ```every()``` will return ```true``` if the *callback function* returns a **truthy** value for **every** array element, otherwise it will return ```false```.
> This characteristic of the ```every()``` method is what makes it a perfect fit for achieving this use-case, once the method runs into a value that does not satisfy the condition in the *callback function*, ```every()``` will immediately return ```false```.
> The **callback** is invoked with ```3``` arguments: the value of the element (```char```), the index of the element (```i```), and the Array object being traversed (which is *not* used in the *palindrome* example).
> It is also worth noting that: ```every()``` does not mutate the array on which it is called.
>
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
> *Example of character mapping of a given string*:
> ```
> const  string = "Hello World!";
>const chars = {};
>
>for (let char of  string) {
>  if (!chars[char]) {
>    chars[char] = 1;
>  } else {
>    chars[char]++;
>  }
>}
>
>console.log(chars);
>
>// output
>{
>    H: 1,
>    e: 1,
>    l: 3,
>    o: 2,
>    ' ': 1,
>    W: 1,
>    r: 1,
>    d: 1,
>    '!': 1
>}
> ```
>
>- This concept of building a map of ```items``` seen in a given ```string```, can be used to solve many common ```string``` questions. Such as:
>1. *What is the most common character in the string?*
>2. *Does string 'A' have the same characters as string 'B' (is it an anagram)?*
>3. *Does the given string have any repeated characters in it?*
>- After building the object, we can ```iterate``` through the object and find the ```character``` with the highest ```value``` by setting ```2``` variables: ```max``` which will hold the *highest value* and ```maxChar``` which will hold the *letter* that corresponds to that *highest value*.
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

Capitalize
-------------
> **Directions**
>*Write a function that accepts a string. The function should capitalize the first letter of each word in the string then return the capitalized string.*
>
> **Example Output**:
>```
>//   capitalize('a short sentence') --> 'A Short Sentence'
>//   capitalize('a lazy fox') --> 'A Lazy Fox'
>//   capitalize('look, it is working!') --> 'Look, It Is Working!'
>```
>
>*Method 1: split(), map(), slice(), and toUpperCase()*
>- Use ```split(" ")``` on the passed in ```string```, be sure to ```split``` by a ```1``` ```space```. This will ```create``` an ```array``` where each ```element``` is ```1``` ```word``` in the ```string```.
>- Use ```map()``` *array helper* to iterate over the newly converted ```array```.
>- For every iteration:
> Use the ```bracket-notation``` to access the first position of the ```string``` (example: ```element[0]```). Then chain the ```toUpperCase()``` method, to convert the leading letter of the word to capitalized.
> Use the ```slice()``` method to return the entire word, except for the first letter (example: ```element.slice(1)```.
> ```return``` from the ```map``` function the *capitalized first letter* ```concatenated``` with the *rest of the word starting from the ```1st``` position*.
> Once the ```map``` function is complete, convert the ```array``` back to a ```string``` using ```join```. Remember to re```join``` the ```array``` separated by ```1``` ```space``` so that each ```element``` will be a single ```word``` in the ```string```.
> Don't forget to ```return``` this ```string```.
>
> *Method 1 Example Code*:
> ```
> function capitalize(str) {
>  const arr = str.split(' ').map(element => {
>    const firstLetter = element[0].toUpperCase();
>    const restOfWord = element.slice(1);
>    return firstLetter + restOfWord;
>  });
>  return arr.join(' ');
>}
> ```
>
>*Method 2: Add to a new string after checking if the next character is a space*:
>- Create an empty ```string``` called ```result```.
>- ```iterate``` through the passed in ```string```
> **for each** ```character``` in the ```string```.
> **if** the ```character``` to the left is a ```space```, ```capitalize``` it and ```add``` it to the ```result```.
> **else**, only ```add``` it to the ```result```.
>- One *gotcha* is ```capitalizing``` the first ```letter```. One way to resolve this is to create the ```result``` variable with the first ```letter``` of the passed in ```string``` ```capitalized```.
>
>*Method 2 Example Code*:
>```
>function capitalize(str) {
>  let result = str[0].toUpperCase();
>
>  for(let i = 1; i < str.length; i++) {
>    if(str[i - 1] === ' ') {
>      result += str[i].toUpperCase();
>    } else {
>      result += str[i];
>    }
>  }
>
>  return result;
>}
>```
>


Steps
-------------
> **Directions**
>*Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character. Make sure the step has spaces on the right hand side!*
>
> **Example Output**:
>```
>// --- Examples
>//   steps(2)
>//       '# '
>//       '##'
>//   steps(3)
>//       '#  '
>//       '## '
>//       '###'
>//   steps(4)
>//       '#   '
>//       '##  '
>//       '### '
>//       '####'
>```
>
>* Method 1: Iterate through rows and columns*
>- ```iterate``` through ```rows``` *from* ```0``` to ```n```.
> ```create``` an ```empty``` ```string``` named ```stair```.
>- ```iterate``` through ```columns``` *from* ```0``` to ```n```.
> **if** the ```current``` ```column``` is ```equal``` to or ```less``` than the ```current``` ```row```.
> ```add``` a ```#``` to ```stair```.
> **else** ```add``` a ```space``` to ```stair```.
>- ```console.log``` ```stair```.
>
>*Method 1 Example Code*:
>```
>function steps(n) {
>  for(let row = 0; row < n; row++) {
>    let stair = '';
>    for(let column = 0; column < n; column++) {
>      if(column <= row) {
>        stair += '#';
>      } else {
>        stair += ' ';
>      }
>    }
>    console.log(stair);
>  }
>}
>```
>
> *Recursion Tips*
>- Figure out the bare minimum pieces of information to represent your problem.
>- Give reasonable defaults to the bare minimum pieces of info.
>- Check the base case. Is there any work left to do? If not, return.
>- When some work is done and you are calling your function again, make sure the arguments have changed in some fashion. If the function is called again and the arguments are unchanged it will likely result in a infinite loop.
>
> *Recursion Example*:
> ```
> function printNumber(n) {
>  if(n === 0) {
>    return
>  }
>  console.log(n);
>  
>  printNumber(n -1);
>}
>
>printNumber(10);
> ```
>
>*Method 2: Use of recursion*
>- **if** ```(row === n)``` **then** we have hit the end of our problem.
>- **if** the ```stair``` ```string``` has a ```length === n``` **then** we are at the end of a ```row```.
>- **if** the ```length``` of the ```stair``` ```string``` is less than or equal to the ```row``` number we're working on, we ```add``` a ```#```, otherwise ```add``` a ```space```.
>
>*Method 2 Example Code*:
>```
>function steps(n, row = 0, stair = '') {
>  if(row === n) {
>    return
>  }
>
>  if(n === stair.length) {
>    console.log(stair);
>    return steps(n, row + 1)
>  }
>
>  const add = stair.length <= row ? '#' : ' ';
>  steps(n, row, stair + add);
>}
>```
>

Pyramid
-------------
> **Directions**
>*Write a function that accepts a positive number N. The function should console log a pyramid shape with N levels using the # character. Make sure the pyramid has spaces on both the left *and* right hand sides.*
>
> **Example Output**:
>```
>//   pyramid(1)
>//       '#'
>//   pyramid(2)
>//       ' # '
>//       '###'
>//   pyramid(3)
>//       '  #  '
>//       ' ### '
>//       '#####'
>```
>
> *Method 1: iterative approach*
>- First, finding the total number of ```columns``` can be found by ```mulitplying``` ```n``` number of ```rows```  by ```2``` and then ```subtracting``` by ```1```. This value can be set to a variable named ```columnTotal```.
>- Second, it will helpful to also get the middle ```column```, which can be found by using the ```columnTotal``` variable, ```dividing``` it by ```2``` and flooring this value with the help of the ```Math.floor()``` method.
> The ```Math``` object's ```floor()``` method returns the largest integer less than or equal to a given number.
>- ```iterate``` through ```row```s, for ```n``` number of ```iterations```.
>- Inside the ```row```s loop, set a variable named ```level``` to an ```empty``` ```string```, this will be used to hold value that will be logged to represent each ```row```. This is why it needs to be the first operation in the loop, to initialize a new ```string``` for each ```iteration```.
>- ```iterate``` through ```column```s, for the ```columnTotal``` number of ```iterations```.
>- In side the ```column```s loop, there needs to exists some ```logic``` to handle ```adding``` a ```#``` or a ```space``` to the ```level``` variable.
> Looking at the example output for pyramid, you will see that there is a pattern: *From the ```midpoint```, extending outward (in both a negative and positive direction) by the value of ```row``` is occupied by a ```#``` symbol*.
> So basically, there is a *range* within the ```columns``` that will be marked with a ```#```.
>- Once we complete ```iterating``` through the ```column```s, we need to ```console.log``` ```level```.
>
>*Method 1 Example Code*:
>```
>function pyramid(n) {
>  const columnTotal = 2 * n - 1;
>  const midpoint = Math.floor(columnTotal/2);
>
>  for(let row = 0; row < n; row++) {
>    let level = '';
>    for(let column = 0; column < columnTotal; column++) {
>      if(column >= midpoint - row && column <= midpoint + row) {
>        level += '#';
>      } else {
>        level += ' ';
>      }
>    }
>    console.log(level);
>  }
>}
>```
>
>

Vowels
-------------
> **Directions**
>*Write a function that returns the number of vowels used in a string. Vowels are the characters 'a', 'e', 'i', 'o', and 'u'. Also note that the function should return the number of vowels even when they are capitalized.*
>
> **Example Output**:
>```
>//   vowels('Hi There!') --> 3
>//   vowels('Why do you ask?') --> 4
>//   vowels('Why?') --> 0
>```
>
>*Method 1: Iterate through string and use includes Array method.*
>- Set a ```counter``` variable which will be used to ```return``` the number ```vowels``` used in the passed in ```string```.
>- Next, set a variable named ```checker``` that will be an ```array``` containing the ```vowel``` characters. This will be used to check the characters in the passed in ```string``` against.
>- ```iterate``` through the passed in ```string```, to accommodate for the *edge-case* where *the function should return the number of vowels even when characters are capitalized*, the ```toLowerCase()``` string method can be used. For every ```character``` in the ```string```, we need some logic to check if the current ```character``` is ```included``` in the ```checker``` array of ```vowels```.
>- ```if``` the ```charater``` is included in the ```checker``` array, ```then``` ```increment``` the ```counter``` variable by ```1```.
>- Finally, ```return``` ```counter```.
>
>*Method 1 Example Code*:
>```
>function vowels(str) {
>  let counter = 0;
>  const checker = ['a', 'e', 'i', 'o', 'u'];
>
>  for(let char of str.toLowerCase()) {
>    if(checker.includes(char)) {
>      counter++
>    }
>  }
>  return counter;
>}
>```
>
>*Method 2: use of match() and RegExp*
>- Create a variable named ```matches``` that is set to an expressions that uses the ```match()``` string method on the passed in ```string``` to obtain matches that are ```vowels```.
>The ```match()``` method takes a ```regular expression```, in this case we will use the ```RegExp``` ```/[aeiou]/gi``` to match the ```vowels``` enclosed by the square brackets.
>The ```g``` flag is used to check **global**, or all occurrences of matches.
>The ```i``` flag is used to ensure the match is **case-insensitive**.
>- ```return``` a ```ternary``` expression that has a condition of ```matches```, where **if** ```maches``` is a *truthy* value (i.e. contains some values in the ```array```) ```matches.length``` is ```returned```
>**else** if ```matches``` is a *falsey* value, then ```return``` ```0```.
>
>*Notes*:
>- The ```match()``` method retrieves when matching a *string* against a *regular expression*.
> If the string matches the expression, it will return an ```Array``` containing the entire matched string as the first element, followed by any results captured in parentheses. If there were no matches, ```null``` is returned.
> If the *regular expression* does not include the ```g``` flag, ```str.match()``` will return the same result as ```RegExp.exec()```. The returned ```Array``` has an extra ```input``` property, which contains the original string that was parsed. In addition, it has an ```index``` property, which represents the zero-based index of the match in the string.
>
>*Method 2 Example Code*:
>```
>function vowels(str) {
>  const matches = str.match(/[aeiou]/gi);
>  return matches ? matches.length : 0;
>}
>```
>
>

Matrix
-------------
> **Directions**
>*Write a function that accepts an integer N and returns an NxN spiral matrix*
>
> **Example Output**:
>```
>//   matrix(2)
>//     [[1, 2],
>//     [4, 3]]
>//   matrix(3)
>//     [[1, 2, 3],
>//     [8, 9, 4],
>//     [7, 6, 5]]
>//  matrix(4)
>//     [[1,   2,  3, 4],
>//     [12, 13, 14, 5],
>//     [11, 16, 15, 6],
>//     [10,  9,  8, 7]]
>```
>
>*Method 1*:
>- **Create** ```empty``` ```Array``` used for storing the *arrays* of **rows** called ```results```.
>- We need to buildout the containg *arrays* (**rows**), we can acheive this by using a ```for-loop``` that will ```push``` an empty ```Array``` into ```results```, ```n``` number of **iterations**.
>- **Create** a ```counter``` variable, starting at ```1```. This will be used to keep track of the *value* used to **set** the ```current-index``` as we build the matrix.
>- **Create** the following variables: ```start column```, ```end column```, ```start row```, and ```end row```. These *variables* will be used to keep track of the **start** and **end** of both the **rows** and **columns**.
>- The ```start row``` and ```start column``` will always be **initialized** at ```0```.
>- In contrast, the ```end row``` and ```end column``` variables will depend on the value of ```n``` passed into the *function*, specifically ```n - 1```.
>- We want to use a ```while-loop``` that will run the code as long as the following *condition* evaluates to **true**: ```(start column <= end column)```  **AND** ```(start row <= end row)```.
>- Essentially what is happening in this algorithm is the *matrix* is being build from the *outside-in*, so what happens is as the *while-loop* progresses the ```startRow``` and ```startColumn``` will be **incremented**, while the ```endRow``` and ```endColumn``` are consistently **decremented**.
>- Eventually, there will be a time when the ```startRow``` will be ```5``` and the ```endRow``` will be ```4```, once the *while-loop* finishes it will not enter the *loop* since the *while-loop's* **condition** *evaluates* to **false**.
>- To *build* the **top row** of the *matrix*, we need to be **at** the ```startRow``` and **increment** from ```start column``` to ```end column```.
>- Inside the **top row** ```for-loop``` we need to **set** the *values* of the  ```current-index```, at the ```startRow``` to ```counter```.
>- Then **Increment** ```counter```.
>- Now that we have completed building the **tow row**, **increment** ```startRow``` (This is where we start to see the **"Building the matrix from the outside-in..."**).
>- **Loop** from ```start row``` to ```end row```.
>- At ```result[i][end_column]``` **assign** ```counter``` variable.
>- **Increment** ```counter```.
>- **Decrement** ```end column```.
> ...*repeat* for other **two sides**.
>
>*Method 1 Example Code*:
>```
>function matrix(n) {
>  const results = [];
>
>  for(let i = 0; i < n; i++) {
>    results.push([]);
>  }
>
>  let counter = 1;
>
>  let startRow = 0;
>  let endRow = n - 1;
>  let startColumn = 0;
>  let endColumn = n - 1;
>
>  while(startColumn <= endColumn && startRow <= endRow) {
>    // Top row
>    for(let i = startColumn; i <= endColumn; i++) {
>      results[startRow][i] = counter;
>      counter++;
>    }
>    startRow++;
>
>    // Right side
>    for(let i = startRow; i <= endRow; i++) {
>      results[i][endColumn] = counter;
>      counter++;
>    }
>    endColumn--;
>
>    // Bottom row
>    for(let i = endColumn; i >= startColumn; i--) {
>      results[endRow][i] = counter;
>      counter++;
>    }
>    endRow--;
>
>    // Left side
>    for(let i = endRow; i >= startRow; i--) {
>      results[i][startColumn] = counter;
>      counter++;
>    }
>    startColumn++;
>  }
>  return results;
>}
>```
>

Fibonacci
-------------
> **Directions**
>*Print out the n-th entry in the fibonacci series. The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two. For example, the ```[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]``` forms the first ten entries of the fibonacci series.*
>
> **Example Output**:
>```
> fib(4) === 3
>```
>
>*Method 1: Iterative Solution*
>- Create a ```results``` **array** that contains the first ```2``` entries of the *fibonacci* series, ```0``` and ```1```. We can *hard-code* these values because these will *never* change and always begin the sequence.
>- Use a ```for-loop``` to **iterate** until the passed in value ```n``` *starting* from ```2```, which is the first *element* after the first two entries we initially added to the ```results``` **array**.
>- Because each number in the *fibonacci series* is the ```sum``` of the *preceeding* two numbers, inside the ```for-loop``` we need to create *two* variables that are set to the value of the last *two* **elements** in the ```results``` **array**.
>- **Add** these two variables and **push** that value into the ```results``` **array**.
>Outside of the ```for-loop``` **return** the value of the ```nth``` entry in the ```results``` **array**.
>
>*Method 1 Example Code*:
>```
>function fib(n) {
>  let results = [0,1];
>
>  for(let i = 2; i <= n; i++) {
>    const a = results[i - 1];
>    const b = results[i - 2];
>    results.push(a + b);
>  }
>
>  return results[n];
>}
>```
>
>*Method 1 Runtime Complexity*
>- As ```n``` increase by ```1``` we need to do ```1``` more additional calculation or **Linear Runtime**.
>
>*Method 2: Using Recursion*
>- The *base-case* is **if** ```n``` is *less* than ```2```, **then** **return** ```n```.
>- ```fib(0)``` -> ```0```
>- ```fib(1)``` -> ```1```
>- *Until* *base-case's* condition is satisfied we **return** the ```sum``` of calling ```fib(n - 1)``` and ```fib(n - 2)```.
>- *Essentially*, what is happening is ```fib()``` will be called recursively, **until** all ```fib()``` function calls have **returned** ```0``` or ```1```. And then all the ```1```s and ```0```s are **added** to make up the ```return``` value.
>- The ```returned``` value is the value of the ```n```th **element** in the *fibonacci series*.
>
>*Method 2 Example Code*
>```
>function fib(n) {
> if(n < 2) {
>   return n;
> }
>
> return fib(n - 1) + fib(n - 2);
>}
>```
>
>*Method 2 Runtime Complexity*
>- We see that if we call ```fib(5)```, we get a total of ```15``` times the ```fib()``` function gets invoked.
>- We also see that if we call ```fib(6)```, we get a total of ```25``` times the ```fib()``` function is invoked.
>- This indicates that the **recursive** solution has an **exponential runtime** (```2^n```).
>- So for each *additional* ```element``` that we add into our *collection* or for each **increment** of the value ```n``` to our *function* we are experiencing a *dramatic* increase in the number of function calls that are required.
>- *Note*, that any time we start seeing an exponential runtime function it usually means that there is a different solution we can put together that might be much more *efficient* in nature.
>- If, your interviewer asks to *refactor* the recursive solution to improve the runtime of this algorithm, they are looking for you to say something very particular.
>- If we take a look at a *tree* of the ```fib()``` function calls, we would see the ```fib()``` function being called multiple times with **identical arguments**.
>- So, if there is some way that we could *avoid* all these extra function calls, then if we call ```fib(6)``` we would really only have to worry about doing all the computation stuff for: ```fib(5)```, ```fib(4)```, ```fib(3)```, ```fib(2)```,  ```fib(1)```, and ```fib(0)``` exactly **one** time and then all other times we could figure out some clever solution to reuse the the previously evaluated ```fib()``` function calls.
>- *Specifically*, your interviewer will want to hear about **Memoization**.
>- **Memoization**: Store the arguments of each function call allong with the result. If the function is called again with the *same arguments*, **return** the precomputed result, rather than running the function again.
>- So we have got some *table* in **memory** that will tell us our function was called with a specific number and when it was **run** it **returned** this result.
>- By doing this *memoization* process or by *caching* all the *results* that come out of the function we can dramatically improve the run speed of this function.
>- *Note*: There are many other interview questions or algorithmic questions that can be answered through this same *memoization* process.
>
>*Memoized solution*:
>```
>function memoize(fn) {
>  const cache = {};
>  return function(...args) {
>    if(cache[args]) {
>      return cache[args];
>    }
>
>    const result = fn.apply(this, args);
>    cache[args] = result;
>
>    return result;
>  };
>}
>
>function slowFib(n) {
> if(n < 2) {
>   return n;
> }
>
> return fib(n - 1) + fib(n - 2);
>}
>
>const fib = memoize(slowFib);
>```
>
>*Memoized Solution Notes*:
>- Basically, we want to build a function ```memoize``` that will take a ```function``` as an ```argument```.
>- **Create** a *variable* ```cache``` that is an *empty* ```object```, this will be used as storage to hold the ```arguments``` being called on the ```fib()``` function and the *result* of running that ```argument``` with ```fib()```.
>- The ```memoize``` function will **return** an *anonymous* ```function```.
>- In order to ensure that this ```function``` will be able to take any number of ```arguments``` we will use the [**spread operator**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) with ```args``` to say that we will take **all** arguments and return an ```array``` contain all of the ```arguments```.
>- Use some *logic* to check **if** the ```cache``` object contains a key matching ```args```, **then** ```return``` the value of ```cache[args]```.
>- **if** ```args``` doesn't exists in the ```cache``` object, which means we haven't seen it yet. **Then** call the ```function``` with ```args``` and *save* the result into a ```variable``` named ```result```.
>- *Next*, set the *unseen* ```args``` and it's ```result``` as a new entry in the ```cache``` object.
>- *Lastly*, ```return``` ```result```.
>- [MDN documentation on  Function.prototype.apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
>

Runtime Complexity
-------------
>**Describes the performance of an algorithm.**
>
> *How much more processing power/time is required to run your algorithm if we double the inputs?*
>
>Revisiting the **String Reverse** problem, specifically the *iterative solution*.
>**Code**:
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
>- In the solution, we take the passed in *string* argument and iterated over each character of the *string* one time.
>- So as we start to add ```1``` additional character to the *string* argument, this would result in ```1``` additional *step* of **work**.
>- Because we basically have a situation, where each additional character would amount to ```1``` step of extra work, this would be considered a **linear** runtime, or *'N'*.
>- A **linear** runtime means that the relationship between additional inputs and work it takes to process is **1:1**.
>
>

>
>Revisiting the **Steps** problem, looking at the solution with ```for-loops```.
>
>**Code*:
>```
>function steps(n) {
>  for(let row = 0; row < n; row++) {
>    let stair = '';
>    for(let column = 0; column < n; column++) {
>      if(column <= row) {
>        stair += '#';
>      } else {
>        stair += ' ';
>      }
>    }
>    console.log(stair);
>  }
>}
>```
>
>- We take the *input* ```n``` and based on this *input* we had ```2``` *nested* ```for-loops```.
>- In this case, when ```n``` was increased by ```1```, we had to do a *significant* amount of work.
>- An example of this is when the *input* ```n``` was equal to ```2```, we ended up having to print ```3``` *hash-symbols* and ```1``` *space*.
>- This would be considered an ```N^2``` or **quadratic runtime**.
>-
>

Different Types of Runtime Complexity
-------------
> **Constant Time**
> ```1```
> *No matter how many elements we're working with, the algorithm/operation will always take the same amount of time.*
>
>**Logarithmic Time**
>``log(n)```
>*You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that searching operations are ```log(n)```*
>
>**Linear Time**
>```n```
>*Iterating through all elements in a collection of data. If you see a ```for-loop``` spanning from ```0``` to ```array.length```, you probably have ```n```, or **linear runtime```*
>
>**Quasilinear Time**
>```n*log(n)```
>*You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that any sorting operation is ```n*log(n)```*
>
>**Quadratic Time**
>```n^2```
>*Every element in a collection has to be compared to every other element. The "handshake problem"*
>
>**Exponential Time**
>```2^n```
>*If you add a 'single' element to a collection, the processing power required doubles*
>

Big 'O' Notation
-------------
>```O(n)``` -> **Linear**
>
>```O(1)``` -> **Constant**
>
>```O(n^2)``` -> **Quadratic**
>
>*What is the runtime complexity of your solution?*
>*What is the big 'O' of your solution?*
>**Both** questions are asking what is the efficiency of your solution. What is the runtime of your algorithm.
>
>**Big 'O' Notation** is a way of writing out this *runtime complexity* that is commonly seen in the academic world.
>
>For example, **linear runtime** could be indicated by writing **O(n)**, *O of n*.
>

Identifying Runtime Complexity
-------------
>- *Iterating with a simple for loop through a single collection?* -> Probably **O(n)**
>- *Iterating through half a collection?* -> Still **O(n)**. There are no constants in runtime.
>- *Iterating through two different collections with separate for loops?* -> **O(n + m)**
>- *Two nested for loops iterating over the same collection?* -> **O(n^2)**
>- *Tow nested for loops iterating over different collections* -> **O(n*m)**
>- *Sorting?* -> **O(n*log(n)**
>


Space Complexity
-------------
>**Runtime Complexity** is a reference to the performance of an algorithm, in terms of *processing power*. Another aspect of an algorithm is the **Space Complexity**, is a reference to **RAM/memory** or *space* an algorithm needs to complete a given task.
>
>In general you can apply a lot of the same rules around *runtime complexity* to *space complexity*.
>An example of this, is in the **String Reverse** problem. In that case for every additional character that we added into our input set we had one additional character that we needed to return in the output set of data.
>So the amount of *memory* that we spent was linear because for every one additional character we needed one additional element in our *string* to be added.
>

Data Structures
-------------
>
>In an interview setting when being asked about **Data Structures**, they are essentially asking you about:
>- *Ways of organizing information with optimal 'runtime complexity' for adding, editing, or removing records.*
>- *Javascript natively implements several data structures*. You will still be asked about **inferior** data structures.
>

Queue
-------------
>A **queue**  is a type of container, that holds **records** or *pieces of data* enter on one end of this container and exit on the other end.
>
>One way to think of a **queue**, is seeing the **queue** as **line** to a **ticketing counter** where the **people** waiting in line are the **records** or *pieces of data*.
>
>The order of which a **record** enters the **queue**, will dictate the order of which the **record** exits the **queue**.
>
> **Adding** a **record** to a **queue**  is also known as **enqueing**.
>
> **Removing** a **record** to a **queue** is also known as **dequeuing**.
>
>**First In First Out** (*F-I-F-O*)
>The **first** **record** *enqueued* will be the first **record** *dequeued*.
>
>In *javaScript*, when we want to implement a **queue**. Usually what we end up doing is taking an **array** and then *restrict* the methods that can be used to interact with that **array**.
>
>A **javascript** array **adding** an *item* to the very front of an array we use ```array.unshift()```. Which will be used to **add a record to the queue**.
>
>In order to **remove** an *item* from the end of the array we can use **javascript** ```array.pop()```. Which will be used to **remove a record from the queue**.
>
>One way making a **queue** would be to make a **queue** ```class``` in **ES 2015*. Inside this ```class``` we can *initialize* an **array** and only *expose* the ```unshift()``` and ```pop``` *methods* outside of the ```class```. Basically, we want to hide access to all the other functionality of the ```Array```.
>
>**Create a Queue Data Structure in JavaScript**
>*The queue should be a class with methods 'add' and 'remove'. Adding to the queue should store an element until it is removed*
>
>*Examples*
>```
>//     const q = new Queue();
>//     q.add(1);
>//     q.remove(); // returns 1;
>```
>
>
>*Notes*
>- In a ```ES2015``` **class**, if we define a [```constructor()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor) inside the **class**, it will be *ran* every time we create a new **instance** of that **class**.
>
>*Queue Example Code*:
>```
>class Queue {
>  constructor() {
>    this.data = [];
>  }
>
>  add(record) {
>    this.data.unshift(record);
>  }
>
>  remove() {
>    return this.data.pop();
>  }
>}
>```
>

Weave
-------------
> **Directions**
>*First, complete the task of creating a Queue Class using ```es2015``` classes. Include the following functionality: ```add()```, ```remove()```, and ```peek()```. Then implement a ```weave()``` function. ```weave``` receives two queues as arguments and combines the contents of each into a new, third queue. The third queue should contain the ```alternating``` content of the two queues. The function should handle queues of different lengths without inserting ```undefined``` into the new one. Do not access the array inside of any queue, only use the ```add```, ```remove```, and ```peek``` methods.*
>
> **Example Output**:
>```
>//    const queueOne = new Queue();
>//    queueOne.add(1);
>//    queueOne.add(2);
>//    const queueTwo = new Queue();
>//    queueTwo.add('Hi');
>//    queueTwo.add('There');
>//    const q = weave(queueOne, queueTwo);
>//    q.remove() // 1
>//    q.remove() // 'Hi'
>//    q.remove() // 2
>//    q.remove() // 'There'
>```
>
>*Implementing the Queue*
>```
>class Queue {
>  constructor() {
>    this.data = [];
>  }
>
>  add(record) {
>    this.data.unshift(record);
>  }
>
>  remove() {
>    return this.data.pop();
>  }
>  
>  peek() {
>    return this.data[this.data.length - 1];
>  }
>}
>```
>
>*Implementing Weave*:
>```
>function weave(sourceOne, sourceTwo) {
>  const q = new Queue();
>
>  while(sourceOne.peek() || sourceTwo.peek()) {
>    if(sourceOne.peek()) {
>      q.add(sourceOne.remove());
>    }
>
>    if(sourceTwo.peek()) {
>      q.add(sourceTwo.remove());
>    }
>  }
>
>  return q;
>}
>```
>


Stack Data Structure
-------------
>A **stack data structure** is very similar to a **queue**, there are just a few differences.
>
>When we *add* a **record** we call this **pushing** a new record onto a **stack**. And *removing* a record is referred to as **popping** a record from the **stack**.
>
>The *biggest* difference between a **stack** and a **queue** are the order in which *items* are **added** and **removed**.
>With the **queue** we had that acronym **FIFO** (*First In First Out*). With a **stack** we deal with **FILO** (*First In Last Out*).
>
>The *implementation* of the **stack** will be very similar to the **queue**, we will have the same *3* **methods**:
>- ```push```: *Add a record to the stack*
>- ```pop```: *Remove the "top" record in the stack*
>- ```peek```: *Return the "top" record without popping it
>

Implement Queue from Stack
-------------
> **Directions**
>*Implement a Queue datastructure using two stacks. DO NOT create an array inside of the 'Queue' class. Queue should implement the methods 'add', 'remove', and 'peek'. Remember that the Queue is ```FIFO``` (First In First Out), while the Stack is ```FILO``` (First In Last Out).*
>
> **Example Output**:
>```
>//     const q = new Queue();
>//     q.add(1);
>//     q.add(2);
>//     q.peek();  // returns 1
>//     q.remove(); // returns 1
>//     q.remove(); // returns 2
>```
>
>*Queue from Stack Code Example*:
>```
>class Stack {
>  constructor() {
>    this.data = [];
>  }
>
>  push(record) {
>    this.data.push(record);
>  }
>
>  pop() {
>    return this.data.pop();
>  }
>
>  peek() {
>    return this.data[this.data.length - 1];
>  }
>}
>
>class Queue {
>  constructor() {
>    this.first = new Stack();
>    this.second = new Stack();
>  }
>
>  add(record) {
>    this.first.push(record);
>  }
>
>  remove() {
>    while(this.first.peek()) {
>      const record = this.first.pop();
>      this.second.push(record);
>    }
>    const record = this.second.pop();
>    while(this.second.peek()) {
>      const record = this.second.pop();
>      this.first.push(record);
>    }
>    return record;
>  }
>
>  peek() {
>    while(this.first.peek()) {
>      this.second.push(this.first.pop());
>    }
>    const record = this.second.peek();
>
>    while(this.second.peek()) {
>      this.first.push(this.second.pop());
>    }
>    return record;
>  }
>}
>```
>

Linked Lists
-------------
>- A **Linked List** is an *ordered* collection of data. Basically, as long as you have some *separate* pieces of *data* and you form some type of *connection* between them, you can refer to that as being a **linked list**.
>- The *collection* contains a number of different *nodes*. Each *node* contains some amount of *data* along with a *reference* to the next *node*.
>- When we put a multiple *nodes* together we refer to it as a **Linked List** because it literally a list of linked nodes.
>- It is also frequently referred to as a **chain** or a *chain of nodes strung together*.
>- The list of **nodes** that form this chain has an **order** that is *always* maintained. So in other words the order of nodes in a *linked list* won't suddenly or randomly change unless it is explicitly changed.
>- In every **Linked Lists** there are always two special nodes. The two special nodes that you'll always see are the **head** node, which is always the very first **node**. And the **tail** node, which is the last **node**.
>- A characteristic of the **tail** node is that it does not have a *reference* to any other **node**.
>- Every **node** has two parts to it. The first being a sort of *data bucket** assigned to it. The *data* that can be contained in it can be anything we want. The other part of the **node** is a reference to the *next* **node** along the **chain**.
>- By *convention* we use the names "**data**" and "**next**" for properties of the **node**.
>
>**Basic Linked Lists Concept**
>```
>const nodeOne = {
>  data: "sample"
>};
>
>const nodeTwo = {
>  data: "example"
>};
>
>nodeOne.next = nodeTwo;
>
>console.log(nodeOne);
>// output => { data: 'sample', next: { data: 'example' } }
>```
>
>- The *snippet* above shows 2 *objects* that have a **data** property and a *connection* is made by the **next** property which is used to make a reference to ```nodeTwo```. This can be considered a **linked list** as it full fills the requirements of needing to store some **data** and have a *connection* to another piece of **data**.
>
>- The **linked list** only knows about the **head node** (*first node*). If it wants to answer any questions about the *data* of the **linked list** then it needs to **crawl** over the **linked list** and obtain that information.
>
>**Implementing Node Class**
>- *Creates a class instance to represent a node. The node should have two properties, 'data' and 'next'. Accept both of these as arguments to the 'Node' constructor, then assign them to the instance as properties 'data' and 'next'. If 'next' is not provided to the constructor, then default its value to be 'null'.*
>
>**Example Use**:
>```
>const n = new Node('There');
>n.data // 'Hi'
>n.next // null
>const n2 = new Node('Hi', n);
>n.next // returns n
>```
>
>**Example Code**:
>```
>class Node {
>  constructor(data, next = null) {
>    this.data = data;
>    this.next = next;
>  }
>}
>```
>
>**Implementing LinkList Class: constructor**
>- *Create a class to represent a linked list. When created, a linked list should have *no* head node associated with it. The LinkedList instance will have one property, 'head', which is a reference to the first node of the linked list. By default 'head' should be 'null'.*
>
>**Example Use**:
>```
>const list = new LinkedList();
>list.head // null
>```
>
>**Example Code**:
>```
>class LinkedList {
>  constructor() {
>    this.head = null;
>  }
>}
>```
>
>**Implementing LinkList Class: insertFirst Method**
>- *Creates a new Node from argument 'data' and assigns the resulting node to the 'head' property. Make sure to handle the case in which the linked list already has a node assigned to the 'head' property.*
>
>**Example Use**:
>```
>const list = new LinkedList();
>list.insertFirst('Hi There'); // List has one node
>```
>
>**Example Code**:
>```
>  insertFirst(data) {
>    const node = new Node(data);
>    this.head = node;
>  }
>```
>
>**Implementing LinkList Class: size Method**
>- *Returns the number of nodes in the linked list.*
>
>**Example Use**:
>```
>const list = new LinkedList();
>list.insertFirst('a');
>list.insertFirst('b');
>list.insertFirst('c');
>list.size(); // returns 3
>```
>
>**Example Code**:
>```
>  size() {
>    let counter = 0;
>    let node = this.head;
>
>    while (node) {
>      counter++;
>      node = node.next;
>    }
>    return counter;
>  }
>```
>
>**Implementing LinkedList Class: getFirst Method**
>- *Returns the first node of the linked list.*
>
>**Example Use**:
>```
>const list = new LinkedList();
>list.insertFirst('a');
>list.insertFirst('b');
>list.getFirst(); // returns Node instance with data 'a'
>```
>
>**Example Code**:
>```
>  getFirst() {
>    return this.head;
>  }
>```
>
>**Implementing LinkedList Class: getLast Method**
>- *Returns the last node of the linked list*
>
>**Example Use**
>```
>const list = new LinkedList();
>list.insertFirst('a');
>list.insertFirst('b');
>list.getLast(); // returns node with data 'a'
>```
>
>**Example Code 1**
>```
>  getLast() {
>    let node = this.head;
>    let lastNode = null;
>    while(node) {
>      lastNode = node;
>      node = node.next;
>    }
>    return lastNode;
>  }
>```
>
>**Example Code 2**
>*This alternate solution eliminates the need for storage of ```lastNode```*
>```
>  getLast() {
>    if(!this.head) {
 >     return null;
>    }
>
>    let node = this.head;
>
>    while(node) {
>      if(!node.next) {
>        return node;
>      }
>      node = node.next;
>    }
>  }
>```
>
>**Implementing LinkedList Class: clear Method**
>- *Empties the linked list of any nodes.*
>
>**Example Use**:
>```
>const list = new LinkedList();
>list.insertFirst('a');
>list.insertFirst('b');
>list.clear();
>list.size(); // returns 0
>```
>
>**Example Code**
>```
>  clear() {
>    this.head = null;
>  }
>```
>
>**Implementing Linked List Class: removeFirst Method**
>- *Removes the last node of the chain*
>
>**Example Use**:
>```
>const list = new LinkedList();
>list.insertFirst('a');
>list.insertFirst('b');
>list.removeLast();
>list.size(); // returns 1
>list.getLast(); // returns node with data of 'b'
>```
>
>**Example Code**:
>```
>  removeFirst() {
>    if(!this.head) {
>      return;
>    }
>    this.head = this.head.next;
>  }
>```
>
>**Implement LinkedList class: removeLast Method**
>- *Removes the last node of the chain*
>
>**Example Use**
>```
>const list = new LinkedList();
>list.insertFirst('a');
>list.insertFirst('b');
>list.removeLast();
>list.size(); // returns 1
>list.getLast(); // returns node with data of 'b'
>```
>
>**Example Code**
>```
>  removeLast() {
>    if(!this.head) {
>      return;
>    }
 >   if(!this.head.next) {
>      this.head = null;
>      return;
>    }
>
>    let previous = this.head;
>    let node = previous.next;
>
>    while(node.next) {
>      previous = node;
>      node = node.next;
>    }
>    previous.next = null;
>  }
>```
>
>**Implementing LinkedList class: insertLast Method**
>- *Inserts a new node with provided data at the end of the chain*
>
>**Example Use**:
>```
>const list = new LinkedList();
>list.insertFirst('a');
>list.insertFirst('b');
>list.insertLast('c');
>list.getLast(); // returns node with data 'C'
>```
>
>**Example Code**:
>```
>  insertLast(data) {
>    const last = this.getLast();
>    if(last) {
>      last.next = new Node(data);
>    } else {
>      this.head = new Node(data);
>    }
>  }
>```
>
>**Implementing LinkedList class: getAt Method**
>- *Returns the node at the provided index*
>
>**Example Use**:
>```
>const list = new List();
>list.insertFirst('a');
>list.insertFirst('b');
>list.insertFirst('c');
>list.getAt(1); // returns node with data 'b'
>```
>
>**Example Code**:
>```
>  getAt(index) {
>    let counter = 0;
>    let node = this.head;
>
>    while(node) {
>      if(index === counter) {
>        return node;
>      } else {
 >       counter++;
>        node = node.next;
>      }
>    }
>    return null;
>  }
>```
>
>**Implementing LinkedList class: removeAt method**
>- *Removes node at the provided index*
>
>**Example Use**:
>```
>const list = new List();
>list.insertFirst('a');
>list.insertFirst('b');
>list.insertFirst('c');
>list.removeAt(1);
>list.getAt(1); // returns node with data 'a'
>```
>
>**Example Code**:
>```
>  removeAt(index) {
>    if(!this.head) {
>      return;
>    }
>
>    if(index === 0) {
>      this.head = this.head.next;
>      return;
>    }
>
>    const previous = this.getAt(index - 1);
>    if(!previous || !previous.next) {
>      return;
>    }
>    previous.next = previous.next.next;
>  }
>```
>
>**Implement LinkedList class: insertAt method**
>-*Create an insert a new node at provided index. If index is out of bounds, add the node to the end of the list.*
>
>**Example Use**:
>```
>const list = new List();
>list.insertFirst('a');
>list.insertFirst('b');
>list.insertFirst('c');
>list.insertAt('Hi', 1)
>list.getAt(1); // returns node with data 'Hi'
>```
>
>**Example Code**
>```
>  insertAt(data, index) {
>    if(!this.head) {
>      this.head = new Node(data);
>      return;
>    }
>
>    if(index === 0) {
>      this.head = new Node(data, this.head);
>      return;
>    }
>
>    const previous = this.getAt(index - 1) || this.getLast();
>    const node = new Node(data, previous.next);
>    previous.next = node;
>
>   }
>```
>
>**Implementing Linked List class: forEach method**
>- *Calls the provided function with every node of the chain*
>
>**Example Use**:
>```
>const list = new List();
>
>list.insertLast(1);
>list.insertLast(2);
>list.insertLast(3);
>list.insertLast(4);
>
>list.forEach(node => {
>node.data += 10;
>});
>list.getAt(0); // Returns node with data '11'
>```
>
>**Example Code: Solution 1**:
>```
>   forEach(fn) {
>     if(!this.head) {
>       return;
>     }
>
>     let node = this.head;
>
>     while(node) {
>       fn(node);
>       node = node.next;
>     }
>   }
>```
>
>**Example Code: Solution 2**
>```
>   forEach(fn) {
>     let node = this.head;
>     let counter = 0;
>     while(node) {
>       fn(node, counter);
>       node = node.next;
>       counter++;
>     }
>   }
>```
>
>**Implementing LinkedList class: for...of Loop compatibility**
>- *Linked list should be compatible as the subject of a 'for...of' loop*
>
>**Example Use**:
>```
>const list = new List();
>
>list.insertLast(1);
>list.insertLast(2);
>list.insertLast(3);
>list.insertLast(4);
>
>for (let node of list) {
>node.data += 10;
>}
>
>node.getAt(1); // returns node with data 11
>```
>
>**Example Code**:
>```
>   *[Symbol.iterator]() {
>     let node = this.head;
>     while(node) {
>       yield node;
>       node = node.next;
>     }
>   }
>```
>

Midpoint of a LinkedList
-------------
>**Directions**:
>*Return the 'middle' node of a linked list. If the list has an even number of elements, return the node at the end of the first half of the list. Do not use a counter variable, do not retrieve the size of the list, and only iterate through the list one time.*
>
>**Example Output**:
>```
>// --- Example
>//   const l = new LinkedList();
>//   l.insertLast('a')
>//   l.insertLast('b')
>//   l.insertLast('c')
>//   midpoint(l); // returns { data: 'b' }
>```
>
>**Example Code**:
>```
>function midpoint(list) {
>  let slow = list.getFirst();
>  let fast = list.getFirst();
>
>  while(fast.next && fast.next.next) {
>    slow = slow.next;
>    fast = fast.next.next;
>  }
>  return slow;
>}
>```
>

Check if a LinkedList is "Circular"
-------------
>**Directions**:
>- *Given a linked list, return true if the list is circular, false if it is not.*
>
>**Example Output**:
>```
>// --- Examples
>//   const l = new List();
>//   const a = new Node('a');
>//   const b = new Node('b');
>//   const c = new Node('c');
>//   l.head = a;
>//   a.next = b;
>//   b.next = c;
>//   c.next = b;
>//   circular(l) // true
>```
>
>**Example Code**:
>```
>function circular(list) {
>  let slow = list.getFirst();
>  let fast = list.getFirst();
>
>  while(fast.next && fast.next.next) {
>    slow = slow.next;
>    fast = fast.next.next;
>
>    if(slow === fast) {
>      return true;
>    }
>  }
>
>  return false;
>}
>```
>

fromLast with LinkedList
-------------
>**Directions**:
>- *Given a linked list, return the element n spaces from the last node in the list.  Do not call the 'size' method of the linked list.  Assume that n will always be less than the length of the list.*
>
>**Example Output**:
>```
>// --- Examples
>//    const list = new List();
>//    list.insertLast('a');
>//    list.insertLast('b');
>//    list.insertLast('c');
>//    list.insertLast('d');
>//    fromLast(list, 2).data // 'b'
>```
>
>**Example Code**:
>```
>function fromLast(list, n) {
>  let slow = list.getFirst();
>  let fast = list.getFirst();
>
>  while(n > 0) {
>    fast = fast.next;
>    n--;
>  }
>
>  while(fast.next) {
>    slow = slow.next;
>    fast = fast.next;
>  }
>  return slow;
>}
>```
>

Trees
-------------
>**Labeling**
>*Node*:
>- An individual **node** will hold some data.
>- Will have a reference to all of it's **children**.
>*Child*
>- Any **node** that is directly underneath a given **node**, or **parent** node.
>- The **parent-child** relationship between **nodes** in a **tree** is an important characteristic of trees.
>*Siblings*
>- We refer to **nodes** at a given **level** as **siblings**.
>- We would **not** refer to **nodes** at a common **level**, but belonging to a **different** **parent** as **siblings**.
> *Tree Traversal*
>- To **iterate** through all the different **elements** in a **tree**.
>- There are **2** main ways to **iterate** through a **tree**, or specific **order** to **traverse** the **tree**: **Breadth-First Traversal** & **Depth-First Traversal**
>- *Breadth-First Traversal*: Starting at the most parent node. Then proceeding to move down to the next level children and visit each node from left to right. In Breadth-First, moving left to right would include nodes that do not share a common parent.
>- *Depth-First Traversal*: Start at the top most parent node. Proceed down the children starting from the furthest left. And once all children have been visited, move back to the closest parent node and move down the next child starting from the furthest left child node. With Depth-First Traversal, you try to get to the bottom of the tree as quickly as possible.
>
>**Implementing the Node Class*
>- *Create the node class. The constructor should accept an argument that gets assigned to the data property and initialize an empty array for storing children. The node class should have methods add and remove.*
>
>**Node class: add method**
>-*Given some data, create a new node and add it to the current node's children array*
>
>**Example Code**:
>```
>class Node {
>  constructor(data) {
>    this.data = data;
>    this.children = [];
>  }
>
>  add(data) {
>    this.children.push(new Node(data));
>  }
>  
>}
>```
>
>**Node class: remove method**
>- *Given some data, look at each child of the current node and remove any node with data === data*
>
>**Example Code**
>```
>class Node {
>  constructor(data) {
>    this.data = data;
>    this.children = [];
>  }
>
>  add(data) {
>    this.children.push(new Node(data));
>  }
>
>  remove(data) {
>    this.children = this.children.filter(node => {
>      return node.data !== data;
>    });
>  }
>
>}
>```
>
>**Tree Class**
>- *Create a tree class. The tree constructor should initialize a 'root' property to null.*
>
>**Example Use**:
>```
>  const node = new Node("TEST");
>  const tree = new Tree();
>  tree.root = node;
>  console.log(tree);
>
>// output
>  =>Tree { root: Node { data: 'TEST', children: [] } }
>```
>
>**Example Code**:
>```
>class Tree {
>  constructor() {
>    this.root = null;
>  }
>}
>
>```
>
>**Breadth-First Traversal**
>- *Implement 'traverseBF' on the tree class.  Each method should accept a function that gets called with each element in the tree*
>
>**Example Code**:
>```
>  traverseBF(fn) {
>    const arr = [this.root];
>    while(arr.length) {
>      const node = arr.shift();
>      arr.push(...node.children);
>      fn(node);
>    }
>  }
>```
>
>**Depth-First Traversal**
>- *Implement 'traverseDF' on the tree class.  Each method should accept a function that gets called with each element in the tree*
>
>**Notes**:
>- With Depth-First, the big different is that the children will be added to the front of the **array**, instead of the end of the array like we did with the **Breadth-First** implementation.
>
>**Example Code**:
>```
>  traverseDF(fn) {
>    const arr = [this.root];
>    while(arr.length) {
>      const node = arr.shift();
>      arr.unshift(...node.children);
>      fn(node);
>    }
>  }
>```
>
>**levelWidth of a Tree**
>- *Given the root node of a tree, return an array where each element is the width of the tree at each level.*
>
>**Example Use**:
>```
>// --- Example
>// Given:
>//     0
>//   / |  \
>// 1   2   3
>// |       |
>// 4       5
>// Answer: [1, 3, 2]
>```
>
>**Example Code**:
>```
>function levelWidth(root) {
>  const arr = [root, 's'];
>  const counters = [0];
>
>  while(arr.length > 1) {
>    const node = arr.shift();
>
>    if(node === 's') {
>      counters.push(0);
>      arr.push('s');
>    } else {
>      arr.push(...node.children);
>      counters[counters.length - 1]++;
>    }
>  }
>  return counters;
>}
>```
>
>**Binary Search Tree**
>- In a **Binary Search Tree** we limit the number of children a parent node can have to 2.
>- We also have the child node to the left will have a **value** less than the parent.
>- While the child node to the right will have a **value** greater than the parent.
>- Since we only have 2 child nodes, rather than keep them in an **array**, we create them as objects with a property of value.
>
>**Implementing Binary Search Tree Node class**
>
>**Directions**
> 1) *Implement the Node class to create a binary search tree.  The constructor should initialize values 'data', 'left', and 'right'.*
> 2) Implement the 'insert' method for the Node class.  Insert should accept an argument 'data', then create an insert a new node at the appropriate location in the tree.
> 3) Implement the 'contains' method for the Node class.  Contains should accept a 'data' argument and return the Node in the tree with the same value.
>
>**Example Code**:
>```
>class Node {
>  constructor(data) {
>    this.data = data;
>    this.left = null;
>    this.right = null;
>  }
>
>  insert(data) {
>    if(data < this.data && this.left) {
 >     this.left.insert(data);
>    } else if(data < this.data) {
>      this.left = new Node(data);
>    } else if(data > this.data && this.right) {
 >     this.right.insert(data);
>    } else if (data > this.data) {
>      this.right = new Node(data);
>    }
>  }
>
>  contains(data) {
>    if(this.data === data) {
>      return this;
>    }
>
>    if(this.data < data && this.right) {
>      return this.right.contains(data);
>    } else if(this.data > data && this.left) {
>      return this.left.contains(data);
>    }
>
>    return null;
>  }
>
>}
>```
>
>**Validate a Binary Search Tree given a node**
>
>- *Given a node, validate the binary search tree, ensuring that every node's left hand child is less than the parent node's value, and that every node's right hand child is greater than the parent*
>
>**Example Code**:
>```
>function validate(node, min = null, max = null) {
>  if(max != null && node.data > max) {
>    return false;
>  }
>
>  if(min != null && node.data < min) {
>    return false;
>  }
>
>  if(node.left && !validate(node.left, min, node.data)) {
>    return false;
>  }
>
>  if(node.right && !validate(node.right, node.data, max)) {
>    return false;
>  }
>
>  return true;
>}
>```
>


Events
-------------
> **Directions**
>- *Create an 'eventing' library out of the Events class.  The Events class should have methods 'on', 'trigger', and 'off'.*
>
>**Example Code of Event Library Implementation in jQuery**:
>```
>    // use .on method to attach an event listener and callback.
>    $('button').on('click', () => {
>      console.log("Hello");
>    });
>
>    // able to assign multiple callbacks to an event of the same name
>    $('button').on('click', () => {
>      console.log("There");
>    });
>
>    // able to invoke the event progamatically using .tigger method
>    $('button').trigger('click');
>
>    // able to unassign a specified >event using the .off method
>    $('button').off('click');
>
>```
>
>**Example Code**:
>```
>class Events {
>  constructor() {
>    this.events = {};
>  }
>
>  // Register an event handler
>  on(eventName, callback) {
>    if(this.events[eventName]) {
 >     this.events[eventName].push(callback);
>    } else {
>      this.events[eventName] = [callback];
>    }
>  }
>
>  // Trigger all callbacks associated
>  // with a given eventName
>  trigger(eventName) {
>    if(this.events[eventName]) {
>      for(let cb of this.events[eventName]) {
>        cb();
>      }
>    }
>  }
>
>  // Remove all event handlers associated
>  // with the given eventName
>  off(eventName) {
>    delete this.events[eventName];
>  }
>}
>```
>

How would you design Twitter?
-------------
> **High Level Notes**
>- *There is no right answer.*
> The interviewer is more looking for how effectively you can communicate rather than a specific blue prints on how to build the service.
>- *Every interviewer will expect a different answer.*
> Interviewer 'A' might want to hear about to identify challenges, while interviewer 'B' might want to know how you would scale the product for 'x' amount of users.
> A good way to approach this type of question is to ask the interview what area of the product they would like to explore.
>- *Focus is usually on the data model.*
> A good place to start is how you would setup a database that would reflect the data/information for the product.
>- *Don't mention specific technologies.*
>**Why** you would pick a specific technology over **what** technology is more along the lines of what the interviewer is interesting in hearing.
>- *Draw stuff.*
>Diagrams or drawing out specific views/UI can help guide the discussion and show that you understand the product that you are trying to build.
>- *Talk.*
>Talking is the most important point out of all of these tips.
>Voice what your thinking.
>Don't tell the interviewer that your organizing your thoughts, this leads to uncomfortable silence.
>When receiving a questions, instantly respond by either asking a question or talking.
>You can always try to get more incites as to what is going on or give the interviewer some idea of what you are thinking.
>
>**How to get started (tips)**
>- *Identify Two Core Features*
>This is where drawing a diagram of the UI can be helpful.
>Out of all the possible features, choose the 2 that you feel you would like to dive into.
>Begin to think about how these features work.
>- *Possible Implementation*
>Think about the different things that are happening during the process/workflow of a particular feature.
>- *Identify and Address Difficulties*
>Some questions you might ask yourself are:
>1) *How a single instance of a resource would look like in the database?*
>2) *How are systems (that are a part of the product) such as '#topic', '@mention', or 'following' made?
>- *Solutions For Scaling*
>- 2 general ideas/topics for scaling a product for many users would be **Caching** and **Deployment Options**.
>- *Caching*: The general idea is a user would go to the *Server* and request some data from the *Database*, where the data being requested is *computationally expensive*. So at some point where a lot of users are all requesting the same data at the same time, handling all of those requests would become very expensive quite quickly. One possible way of combating this problem, is for a particular user, i.e. "user 1", when they first request the data, the server will compute that expensive transaction and send that data as a response to the user, we would also store that data in some sort of *memory store*. So if "user 1" were to come back in a certain amount time (i.e. 5 minutes), rather than going back to the database and running that expensive transaction, we could go to that memory store and send that data to the user.
>*Deployment Options*: One answer would be to focus on the server architecture and expand it by creating a *Load Balancer*, so whenever a user makes a request to the application, it would first be processed by the *Load Balancer* where it will randomly assign that request to any one of a number of identical servers. This would relieve the stress on a single server and be able to handle a higher number of requests.
>

Sorting Algorithm Overview
-------------
>- Generally, in an interview setting, a *sorting algorithm* will be about sorting the elements of an **array** from *lowest to highest*.
>
>The **3** different *sorting algorithms* that we will go over are, with there corresponding level of difficulty for implementation:
>- BubbleSort (*easiest*)
>- SelectionSort (*easier*)
>- MergeSort (*medium*)
>
>There are many *sorting algorithms*, but these **3** are the most common and easiest to implement.
>
>*BubbleSort* and *SelectionSort* have the same *Worst Case Runtime* of ```n^2```, that means for every additional element that we add to the collection to sort it will take significantly more work than the time added for the previous element added.
>
>This means that *BubbleSort* and *SelectionSort* are poor algorithms to sort large data sets, but if your data set is small and will always remain small then using these either of these algorithms will work fine.
>
>*MergeSort* has a *Worst Case Runtime* of ```n*log(n)```, or for every additional element added to our sort will add slightly more time to process than the element we have previously added. So it would not grow as quickly as a ```n^2``` runtime, but it will be growing quite rapidly.
>
>**BubbleSort Implementation**:
>```
>function bubbleSort(arr) {
>  for(let i = 0; i < arr.length; i++) {
>    for(let j = 0; j < (arr.length - i - 1); j++) {
 >     if(arr[j] > arr[j+1]) {
>        const lesser = arr[j+1];
>        arr[j+1] = arr[j];
>        arr[j] = lesser;
>      }
>    }
>  }
>
>  return arr;
>}
>```
>
>**SelectionSort Implementation**:
>```
>function selectionSort(arr) {
>  for(let i = 0; i < arr.length; i++) {
>    let indexOfMin = i;
>
>    for(let j = i + 1; j < arr.length; j++) {
>      if(arr[j] < arr[indexOfMin]) {
>        indexOfMin = j;
>      }
>    }
>
>    if(indexOfMin !== i) {
>      let lesser = arr[indexOfMin];
>      arr[indexOfMin] = arr[i];
>      arr[i] = lesser;
>    }
>  }
>
>  return arr;
>}
>```
>
>**MergeSort Implementation: Merge Function**:
>- The ```mergeSort``` algorithm generally uses a *recursive* solution.
>- The ```merge``` algorithm is not *recursive*, it is *iterative*, and takes ```2``` arguments (*2 sorted arrays, that are sorted from lowest to highest*)
>- The purpose of the ```merge``` function is to *merge* the two sorted arrays into a single *sorted array*.
>
>**Merge Function Example Code**:
>```
>function merge(left, right) {
>  const results = [];
>
>  while(left.length && right.length) {
>    if(left[0] < right[0]) {
>      results.push(left.shift());
>    } else {
>      results.push(right.shift());
>    }
>  }
>  return [...results, ...left, ...right];
>}
>```
>
>**MergeSort Function Example Code**:
>```
>function mergeSort(arr) {
>
>if(arr.length === 1) {
>
>return arr;
>
>}
>const center = Math.floor(arr.length/2);
>const left = arr.slice(0, center);
>const right = arr.slice(center);
>
>return merge(mergeSort(left), mergeSort(right));
>
>}
>```
>
