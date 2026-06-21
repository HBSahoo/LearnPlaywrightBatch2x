let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); //[ 'apple', 'banana', 'cherry' ]

let number = [3, 1, 4];
number.sort()
console.log(number); //[ 1, 3, 4 ]

let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums);//[ 1, 10, 2, 21 ] (Natural Sorting, lexicographic Sorting)
//By default, arrays are sorted in lexicographic order, which means they will be sorted like a string, like the first characters. 

//But if you need to properly sort them as a number, you need to use the `arrow function`, which is this 

nums.sort((a,b)=>a-b);
console.log(nums);//[ 1, 2, 10, 21 ](Ascending)

nums.sort((a,b)=>b-a);
console.log(nums);//[ 21, 10, 2, 1 ](Descending)
//((a, b) => a - b) this is function which can sort the two number
//a-b = -1(1-2=-1)a<b
//a-b = 0(1-1=0) a===b
//a-b = 1(2-1=1)a>b [sorting will happened based on this logic.]
//[10, 1, 21, 2]
//10-1=+ve then 1 comes before 10 [1,10,21,2]
//21-2=+ve then 2 comes before 21 [1,10,2,21]
//10-2=+ve then 2 comes before 10 [1,2,10,21]
//1-2=-ve then order stay [1,2,10,21]


