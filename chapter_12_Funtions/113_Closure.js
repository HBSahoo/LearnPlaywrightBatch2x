// closure is nothing but returns another function call along with current function code execution

function outer() {
    let message = "hello";
    console.log("Outer CALLED");
    function inner(){
        console.log(message)
    }
    return inner;
}
let fn_inner = outer();
fn_inner();// inner & outer both called because return is inner

inner(); // ReferenceError: inner is not defined