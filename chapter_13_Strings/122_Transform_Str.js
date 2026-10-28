let str = "  Hello, World!  ";
console.log(str.toUpperCase());//HELLO, WORLD! 
console.log(str.toLowerCase());//hello, world!

console.log(str.trim());//Hello, World![remove space from both side]

console.log(str.trimStart());//Hello, World! //removes leading whitespace only
console.log(str.trimEnd());// Hello, World!//removes trailing whitespace only 

let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL","PASS"));//Test: PASS. Retry: FAIL.
console.log(msg.replaceAll("FAIL","PASS"));//Test: PASS. Retry: PASS.
console.log(msg.replace(/FAIL/g, "PASS"));//Test: PASS. Retry: PASS.[used Regex]

// Concatenation
console.log("Hello" + " " + "World");//Hello World
console.log("Hello".concat(" ", "World"));//Hello World
console.log(`${"Hello"} ${"World"}`);//Hello World

let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa"));//https://qa.vwo.con?qa=pramod

let r = "pass,fail,skip";
let rs= r.split(",");
console.log(rs);// [ 'pass', 'fail', 'skip' ]

let rr = "test_login_pass"
let rrs= rr.split("_")
let rrsj = rrs.join(" ");
console.log(rrsj);//test login pass

let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);//2024-03-07