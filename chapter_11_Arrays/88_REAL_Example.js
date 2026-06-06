let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);//5
console.log(browser); //[ 'chrome', 'firefox', 'safari', 'opera', 'edge' ]

browser.pop(); // remove last element
console.log(browser);//[ 'chrome', 'firefox', 'safari', 'opera' ]
console.log(browser.length);//4

let removedLastItem = browser.pop();
console.log(browser);//[ 'chrome', 'firefox', 'safari' ]
console.log(removedLastItem);//opera

browser.shift();// remove 1st element
console.log(browser);//[ 'firefox', 'safari' ]

let removed = browser.shift();// remove 1st element
console.log(browser);//[ 'safari' ]
console.log(removed);//firefox

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "safari") {
        console.log("safari is removed from the selenium!");
    }
}
