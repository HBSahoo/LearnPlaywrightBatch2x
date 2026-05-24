if ("hello") console.log("String is truthy"); // String truthy hence console will print
if (42) console.log("Number is truthy"); // number is truthy hence console will print
if ({}) console.log("Empty object is truthy!"); // Object is truthy hence console will print
if ([]) console.log("Empty array is truthy!"); // Array is truthy hence console will print

if ("") console.log("Won't print"); // Empty String is false condtion hence console will not print
if (null) console.log("Won't print"); // null is false condtion hence console will not print
if (undefined) console.log("Won't print"); // undifined is false condtion hence console will not print
if (NaN) console.log("Won't print"); // Nan is false condtion hence console will not print
if (0) console.log("Won't print"); // 0 is false condtion hence console will not print

let name = undefined;
if (name) {
    console.log("Hi");
} else {
    console.log("Bye");
}

// ANY NUMBER = 1,2,,3,34,32,2,- TRUTH
// 0= FALSE

let name = 0;
if (name) {
    console.log("Hi");
} else {
    console.log("Bye");
}