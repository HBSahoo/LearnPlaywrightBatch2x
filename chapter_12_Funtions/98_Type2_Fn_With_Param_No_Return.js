function greetByName(name) {
    console.log("Hi", name);
} 

greetByName("Hrudaya"); //Hi Hrudaya
let result = greetByName("pramod");// Hi pramod
console.log(result);//undefined [As this method does not have any return]

function begger(money) {
    console.log("Thanks", money);
}

let returnMesomething = begger(100);//Thanks 100
console.log(returnMesomething); //undefined [As this method does not have any return]