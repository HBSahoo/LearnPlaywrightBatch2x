// Objects
// Key and value

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 987654320 }

// Key will not be in the double quotes
// below key in doubt is actually JSON

let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };

let a = { status: "pass" };
console.log(a.status);//pass
console.log(a["status"]);//pass

let a1 = { status: 'pass' };
console.log(a1.status);//pass

let b = a;
b.status = "fail";
console.log(a.status);//fail
console.log(b.status);//fail  this concept called as copy by reference

if (b === a) {//true
    console.log("true");
} else {
    console.log("false");
}