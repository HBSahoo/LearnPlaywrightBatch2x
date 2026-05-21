// ??
console.log(null >=0); //In relational comparisons (<, >, <=, >=), null is first converted to a number. "0 >= 0" which is true
                      //  null == 0 or null > 0
console.log(null == 0);// here null is treated specially here.

// ??  Nullish
let amul = null;
let milk_required = amul ?? "Nandini Milk";
console.log(milk_required); //Nandini Milk

let a = null;
let b = a ?? "default value";
console.log(b); // default value

let amul1 = "amul_present";
let milk_required1 = amul1 ?? "Nandini milk"
console.log(milk_required1);// amul_present


// Nullish opearator is used to only replace the null/undefined value
//We use this operator in automation when we want to assign default value to a variable if the original value is null or undefined. It helps us to avoid errors and ensure that our code runs smoothly even when some values are missing or not available.
//sometimes, we use single question mark also

//val = "which milk?->" + val; // advance level
//console.log(val);