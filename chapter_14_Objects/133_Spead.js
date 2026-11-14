const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const copy = {...obj1};//{ a: 1, b: 2 }
console.log(copy);

let config1 = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config1.browser = "firfox";
config1.timeout = 5000;
config1.retries =2;
console.log(config1);//{ browser: 'firfox', timeout: 5000, retries: 2 }
config1 = { browser: "Safari" };
console.log(config1);//{ browser: 'Safari' }


