const greet = function (name) {
    return `Hello, ${name}`;
}
console.log(greet("Hrudaya"));
let r = greet("Lilan");
console.log(r);

// Type 4 normal Fn
function greet1(name1) {
    return `Hello, ${name1}!`;
}


// Functions as Expression
const greet2 = function (name1) {
    return `Hello, ${name1}!`;
}
//both greet1 & greet2 functions are same

console.log(greet1("Bob"));
console.log(greet2("Bob"));