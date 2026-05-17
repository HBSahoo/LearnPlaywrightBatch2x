let a = 10; // Global Scope
console.log(a);
// Defination of the function
function printHello(){
    console.log("Hello TheTestingAcademy!");
    let a = 20; // Local Scope
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a);//30
    }
     console.log("F ->", a);// a will be printed ->20 as a is outside of block (Example of block scope)
}//when Block is finished then let is gone

console.log("G ->", a);

printHello();


