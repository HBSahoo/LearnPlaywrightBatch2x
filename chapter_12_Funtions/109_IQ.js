// // Returns a value
function getStatus(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "server error";
}
console.log(getStatus(200));
console.log(getStatus(404));
console.log(getStatus(500));

function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}
let result = logTest("Login");// login as console.log executed
console.log(result);//undefined as no return type

greet("Alice");

function greet(name) {// executed this method as it is normal function
    return `Hello, ${name}!`;
}

sayHi("Bob");//reference error as it is calling before method

const sayHi = function (name) {
    return `Hi, ${name}!`;
};