let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);//[1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5

// splice(start, deleteCount, ...itemsToAdd)
arr.splice(2, 1);
console.log(arr);// from 2nd index number delete one item [ 1, 2, 4, 5, 6 ]
arr.splice(2, 2);
console.log(arr);// from 2nd index number delete two item [ 1, 2, 6 ]
arr.splice(1, 2);
console.log(arr);// from 1st index number delete two item [ 1 ]

arr.splice(2, 0, 99); // add 99 in 2nd index
console.log(arr);//[1,99]

let arr1 = [1,2,3,4,5,6];//replce with 98 in 2nd index
arr1.splice(2, 1, 98);
console.log(arr1); 

arr1.splice(2, 2, 98, 99);//From 2nd index replce two item
console.log(arr1); //[ 1, 2, 98, 99, 5, 6 ]





