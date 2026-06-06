let results = ["pass", "fail", "pass", "error", "fail"];

// indexOf — returns first index, or -1 if not found

results.indexOf("fail"); //1 (fail is present two times but it will search 1st duplcate value)
results.indexOf("skip"); // -1

// lastIndexOf — searches from the end
results.lastIndexOf("fail"); // 4

// includes — returns boolean
results.includes("error"); // true if present
results.includes("skip");  // false if not present

// find — returns first matching element
let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20);// 1st element which is greater than 20
console.log(r);//25

// findIndex
let w = nums.findIndex(n => n > 26);//1st index number which value is greater than 26
console.log(w); //2

//findLast value
let a = nums.findLast(n => n > 10); //Last element which value is more than 20
console.log(a);//45

let c = nums.findLast(n => n > 45);
console.log(c);//undefined

//FindLast Index number
let b = nums.findLastIndex(n => n > 20);// Last index which value is more than 20
console.log(b);//3