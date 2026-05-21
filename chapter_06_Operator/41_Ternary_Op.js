let raj_age = 18;
let raj_will_goa = raj_age >= 18 ? "Raj will go Goa" : "No Goa";
console.log(raj_will_goa);

let ramAge = 19;
let canVote = ramAge > 18 ? "Elgible for vote" : "Not eligible for vote";
console.log(canVote);

let hydCityTemp = 40;
let hydCityWeather = hydCityTemp >= 40 ? "Sunny" : "cold";
console.log(hydCityWeather);

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "Test case passed" : "Test case failed";
console.log(testResult);

let environment = "staging";
let baseUrl = environment === "prod" ? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseUrl);

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("launching browser in", browserMode, "mode");

let responseTime = 850; //ms
let sla = 1000; //ms
let slaStatus = responseTime <= sla ? "within sla" : "sla breached";
console.log(`Response Time: ${responseTime}ms - ${slaStatus}`);

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);

//How is ternary operator written
// condition ? value if true : value if false

//Nested Ternary operator
//Multiple condition

let age =30;
let is_promod_goa = age > 18 ? (age > 26 ? "Drink" : "No Drink" ) : "else he will not goa";
console.log(is_promod_goa);

let statusCode = 400;
let category = statusCode < 300 ? "Sucess" : statusCode < 400 ? "Redirect" : statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode} : ${category}`);

let temp = 35;
let feel = temp >= 40 ? "Very Hot" : (temp >= 30) ? "Hot" : (temp >=20) ? "warm" : (temp >= 10) ? "cool" : "cold";
console.log("7. Tempraure", temp, "| Feel:",feel);
