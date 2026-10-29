//Reverse a string
let str = "ctc";
let rev = "";
for(let i = str.length-1;i>=0; i--){
    rev = rev+str.charAt(i);
}
console.log("Reverse of a given string is ->"+rev);//yadurH
//Palindrom
if(str.toLowerCase()===rev.toLowerCase()){
    console.log("String is Palindrom");
}
else{
    console.log("String is not Palindrom");
}
