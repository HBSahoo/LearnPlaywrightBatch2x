let scores = [45, 82, 91, 60, 73];

// map - transform every element, return a new arrays
// A map will always return the same number of elements that you have, but based on the condition, their values will be changed. 
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);//[ 'Fail', 'Pass', 'Pass', 'Fail', 'Pass' ]

// filter — keeps elements that pass a test
let passing = scores.filter(s=>s>70);
console.log(passing);

// reduce , // reduce — accumulates to a single value
let total = scores.reduce((a,b)=>a+b,0);
console.log(total);
/*reduce-> A built-in JS method that "reduces" an array to a single value
((a,b)=>a+b,0) -> A function that takes two numbers and adds them
here 0 is intial value
((a,b)=>a+b) if When we don't provide an initial value, "reduce" automatically uses the first item(45) of the array as the starting point, and begins looping from the second item. output will be same 351.
The only risk: If your array were ever empty, this would crash:
let scores = [];
let total = scores.reduce((a, b) => a + b);  // ❌ TypeError!
With the 0, it safely returns 0 for an empty array.*/


// flat — flattens nested arrays
//flat will convert to single array
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());