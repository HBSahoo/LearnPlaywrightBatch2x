console.log(typeof ("200"));//string
let str = "Hello World!";
console.log(str.length); // // Length always starts from 1, total len- 13

// Access by index
console.log(str[0]);//H
console.log(str[7]);//o
console.log(str[-1]);//undefined
console.log(str.at(-1));//!
console.log(str.at(-6));//W

// index = 0, length = 1
console.log(str.charAt(0));//H
console.log(str.charCodeAt(0));72