let a = [1, 2];
let b = [3, 4];
let c = a + b;
console.log(c);//1,23,4 it just added like string

//Better we can use concat function
let a = [1, 2];
let b = [3, 4];
// let c = a + b;
let c = a.concat(b);
console.log(c); // [ 1, 2, 3, 4 ]

// spread (modern way) - concatenation. (...)
let d = [...a,...b]; //"..." represent all elements in array
console.log(d); //[ 1, 2, 3, 4 ]

// Join 
let s = ["pass", "fail", "skip"];
let e = s.join("|"); //join with pipe line
console.log(e);
let f = s.join("-");// join with hyphen
console.log(f);
let g = s.join(" ");// join with space
console.log(g);