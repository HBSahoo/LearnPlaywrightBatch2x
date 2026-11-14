let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);//{ status: 'pass' }
console.log(d);//{ status: 'pass' }

if (c === d) {//false
    console.log("true");
} else {
    console.log("false");
}