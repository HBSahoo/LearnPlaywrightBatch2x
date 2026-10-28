// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// incudes
console.log(url.includes("staging"));//true
console.log(url.includes("production"));//false

// startsWith / endsWith
console.log(url.startsWith("https"));//true
console.log(url.startsWith("http://"));//false
console.log(url.endsWith("true"));//true

// indexOf / lastIndexOf
console.log(url.indexOf("a"));//10[Returns the position of the first occurrence of a substring, or -1 if it is not present.]
console.log(url.lastIndexOf("a"));//24[last index of a][Returns the last occurrence of a substring in the string, or -1 if it is not present.]

console.log(url.indexOf("nothere"));//-1, if returns -1 then it does not exist at all.
console.log(url.indexOf("x"));//-1

//regex
console.log(url.search(/login/));//28[search with login , & it will start index of login]
console.log(url.search(/vwo/));//16
console.log(url.search("api"));//24
console.log(url.search("url"));//-1[if not found then it returns -1]

// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within the strings automatically. 
/*
Need	                                       Use
Find exact substring	                       indexOf
Search from end	                               lastIndexOf
Start at position N	                           indexOf(x, N)
Pattern / case-insensitive / flexible match	   search
Just yes/no (not position)	                   includes
*/