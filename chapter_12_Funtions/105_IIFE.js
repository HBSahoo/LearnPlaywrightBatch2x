//Immediately Invoked Function Expression (IIFE)
//Immediately Invoked Function Expression (IIFE)
//They don't need to be called.

//this type of function is mostly used when we do not want to share the function.
//We want this function to be immediately invoked right now.


(function(){
    console.log("Hi");
})();

(function () {
    // playwright to run the test
})();

(function () {
    console.log("Staging")
})();

(()=>{
    console.log("Setup complete");
})();