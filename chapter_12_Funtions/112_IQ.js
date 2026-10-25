let g_x = 10;


// Nested scope | blocked scope 
function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x);// we can user outer scope

    }
    inner();
    console.log(y);//this inner scope we can not use in outside[reference error]
}
outer();