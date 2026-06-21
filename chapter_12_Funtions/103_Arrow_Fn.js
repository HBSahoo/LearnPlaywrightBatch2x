// Arrow Function (ES6)

const greet = function (name1) {
    return "Hi" + name1;
}

let r = greet("Pramod");
console.log(r);//HiPramod

const greet2 = (name1)=>"Hi"+name1;
let r2 = greet2("Promod");
console.log (r2);//HiPramod
//Both functions greet & greet2 are same but in greet2 we are useing "arrowfunction".

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>

const doubleIt = n => n*2;
console.log(doubleIt(10));//20

const printIt = name => console.log(name);
printIt("Sahoo");//Sahoo

function add(a, b) {
    return a + b;
}

const add2 = (a,b)=>a+b;
console.log(add2(2,3));

function say() {
    console.log("Hi");
}
const say1 = ()=>console.log("Hi");
const say2 = () => 'Hi';

const greet = (name) => {
    const message = "Hi " + name;
    return message;
}
console.log(greet("Hrudaya"));