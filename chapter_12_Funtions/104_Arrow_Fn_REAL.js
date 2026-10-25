// if (ourStatusCode >= 200 && ourStatusCode < 300)
//This is a perfectly normal function. 
function validateStatusCode(status){
    if(status >= 200 && status <= 300){
        console.log("Request is fine!");
    }
}
// call function
validateStatusCode(200);

// This is a function as an expression.
const validateStatusCode_Exp = function(status){
    if(status>=200 && status<=300){
        console.log("Request is fine!");
    }
}
validateStatusCode_Exp(300);

// Arrow function 
const validateStatusCode_Arrow = (status) =>{
     if(status>=200 && status<=300){
        console.log("Request is fine!");
    }
}
validateStatusCode_Arrow(200);