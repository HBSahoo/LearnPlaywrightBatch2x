const BASE_URL = "https://app.thetestingacademy.com";
//const BASE_URL = "https://app.thetestingacademy.com";// Redclration not possible
//BASE_URL = "https:/ / staging.thetestingacademy.com"; // can not change
// TypeError: Assignment to constant variable.


let name = "pending";
name = "done"; // let can be changed but const can not be changed
{
    let name = "Dutta";
}

function say() {
    let name = "Dutta";
}
say();
say();