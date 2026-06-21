// Slicing & Combining
//slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end. 

let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1,3));//[ 2, 3 ](start, end -1)
console.log(arr.slice(2, 4));//[ 3, 4 ]
console.log(arr.slice(2, 5));//[ 3, 4, 5 ]

console.log(arr.slice(2));//[3, 4, 5]

console.log(arr.slice(-2));//[ 4, 5 ] //start from the -1 and till -2. 
console.log(arr.slice(-3));//[3,4,5]

console.log(arr.slice(0));//[ 1, 2, 3, 4, 5 ](it will take all the value)

let arr = [10, 20, 30, 40, 50];
let s = arr.slice(1, 4);  
console.log(arr);//[ 10, 20, 30, 40, 50 ] (here original array is not changed)
console.log(s);  // [20, 30, 40]

let arr = [10, 20, 30, 40, 50];
let removed = arr.splice(1, 2);   // remove 2 from index 1
console.log(removed);             // [20, 30] removed
console.log(arr); // [ 10, 40, 50 ] (here original array is changed)

/*
splice vs slice, difference in JS
slice- original array will not be changed where as splice- original array will be changed
slice- Returns New array (copy of range) where as splice - Returns removed element
slice- Args (start, end) or (end) where as splice- Args (start, deleteCount, ...itemsToInsert)
slice - purpose ->Read sub-array where as splice - purpose ->Remove / insert / replace in place
*/