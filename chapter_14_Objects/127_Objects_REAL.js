let config = {};
config.browser = "chrome"
config.timeout = 3000;
config.testName = "login Test";

console.log(config);//{ browser: 'chrome', timeout: 3000, testName: 'login Test' }

if (config.browser === "chrome") {// it will execute as browser is not deleted [I will execute my TC]
    console.log("I will execute my TC");
}
delete config.browser;
console.log(config);//{ timeout: 3000, testName: 'login Test' }

if (config.browser === "chrome") {// it will not execute as browser deleted
    console.log("I will execute my TC");
}

let config2 = {
    browser : "chrome",
    timeout : 3000,
    testname : "login test"
};