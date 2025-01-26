// primitive

// 7 types: string,boolean,number,null,undefined,symbol,bigInt;
//they are pass by value

const score=100
const scoreValue=100.3

const isLoggedIn=false
 let outsideTemp=null
 let userEmail;

 

 const id=Symbol('123')
 const anotherId=Symbol('123')
 console.log(id===anotherId)

 //refrence or non-primitive
 //array ,objects,functions
 //they all have return type object and function has object function

 //arrays
 const heroes=["krish","doga"];

 //objects
 let myObj={
    name:"ujjwal",
    age:"22"
 }

 //function

 const myFunction = function(){
    console.log("hello world");
 }

//  https://tc39.es/ecma262/#sec-typeof-operator



//stack(primitive)->copy banti hai , heap(non-primitive)->refrence diya jaata hai

let myYoutubeName="chaiorcode"
let anotherName=myYoutubeName
anotherName="ujjwal"
// console.log(myYoutubeName)
// console.log(anotherName)

let userOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email = "ujjwal@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
