//- Strings are sequences of characters. 
//- JavaScript provides many methods for string manipulation.
//- A string is a sequence of characters used to represent text. 
//- In testing, strings are everywhere -> **URLs, selectors, assertions, response messages, log parsing.**

// Single quotes
let a = 'hello';

// Double quotes
let b = "world";

let name1 = "Alice";
let message = `Hello, ${name1}! 2+2 = ${2+2}`;
console.log(message);

//Muliti Line
let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
  ds
  das
  das
  das
  d
  asd
  asd
  a
`;
console.log(report);

let longstory = `
I want to tell you a very long story 
where we had a lot of students, w
hich we basically have a lot of tests and blah
 blah blah blah blah blah. 
`;
console.log(longstory);

console.log(String(200)); // "200"
// String(true); -> // "true"
//String(null); // "null"
String([1, 2]); // "[1,2]"

// string - data type
// String -> interface( which will help you to create a new strings)