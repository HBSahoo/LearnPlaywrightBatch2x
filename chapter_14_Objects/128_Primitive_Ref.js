// Primitive vs Reference Types
let a = 10;
let b = a;
console.log(b);//10;
b=99;
console.log(b);//99
console.log(a);//10

// Objects — copied by REFERENCE , call by ref. 
// Reference - object, array, function
let obj1 = { val: 10};
let obj2 = obj1;
console.log(obj1.val);//10;
obj2.val=99;
console.log(obj1.val);//99

// Premetive : number, string, boolean, null, undefined
// Reference : Object, Array, Function
// Object is dynamic nature
