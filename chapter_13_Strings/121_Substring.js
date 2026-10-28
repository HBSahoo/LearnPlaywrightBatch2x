let str = "Login_Test_Pass_001";
// slice(start, end) - Both negative posetive index supported
console.log(str.slice(0, 5));//Login
console.log(str.slice(11));//Pass_001[index start from 11 to till end]

let testNumber = str.slice(-3);
console.log(testNumber);//001

console.log(str.includes("Pass"));//true

// substring(start, end) — no negatives (treats as 0)
console.log(str.substring(6, 10));//Test
let test = str.at(0);
console.log(test);//L
console.log(str.substring(-2));//Login_Test_Pass_001[treat as start index 0]