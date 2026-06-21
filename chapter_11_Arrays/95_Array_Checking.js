// Checking Arrays

// Check if something IS an array
let result = Array.isArray([1, 2, 3]); // isArray() functions returns true or false 
console.log(result);//true
let result1 = Array.isArray("a"); // it is not an array
console.log(result1);// false

// every & some

let a = [80,90,85].every(s => s>=80);//every() function will check for all the condition, if all condtion is satisfied then it will return true or it will return false
console.log(a);//true
let b = [80, 60, 85].every(s => s >= 70);
console.log(b)//false

// Playwright API 
[200, 201, 203].every(statuscode => statuscode > 200);

// some — AT LEAST ONE must pass
let c = [80, 60, 85].some(s => s < 70); // some() function satisfied atleast one element then it will throw true
console.log(c);// true
let d = [80, 90, 85].some(s => s < 70); // here some() function is not satisfied all the element so it throws false.
console.log(d);