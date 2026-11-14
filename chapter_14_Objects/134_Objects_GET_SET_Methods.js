const user = {   // old format
    firstName: "Pramod",
    lastName: "Dutta",
    get fullName(){
        return this.firstName + this.lastName;
    },
    set fullName(value){
        [this.firstName, this.lastName]= value.split(" ");
    }
    // this. it means current value in the Object.
}
console.log(user.fullName);//PramodDutta
user.fullName= "Amit Sharma";
console.log(user.fullName); AmitSharma


// class User{   [new format we will use in future]
//     firstname
//     lastName,
//     fullName(){

//     }
// }