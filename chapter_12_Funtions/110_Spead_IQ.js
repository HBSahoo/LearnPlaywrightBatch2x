function add(a, b, c) {

    return a + b + c;

}
let num = [1, 2, 3];
add(...num);
console.log(add(...num));//6 it wull execute as num is array

let responseCode = [200, 201, 404]

function hasError(...codes){
    return codes.some(c=> c>=400);
}
hasError(...responseCode);
console.log(hasError(...responseCode));//true