// Accessing & Modifying
let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);
console.log(statuses[2]);

console.log(statuses[-1]); //undefined , when we are using index no -1,-2,etc then at()we need to use otherwise it is showing undefined.
console.log(statuses.at(-1));// this functions are borrowed function coming from python
console.log(statuses.at(-2));
console.log(statuses.at(-3));
console.log(statuses.at(-4)); undefined

// Modify
statuses[1] = "blocked";
console.log(statuses);