// Higher-Order Functions
// A function that takes a function as argument or returns a function.

function runWithLogin(testFn, testName){
    let result = testFn();
    return result;
}

function loginTest(){
    return "pass";
}

function loginTestFailed(){
    return "fail";
}

const a = runWithLogin(loginTest, "Login Test");
console.log(a);
const b = runWithLogin(loginTestFailed,"Dashboard Failed Test");
console.log(b);
