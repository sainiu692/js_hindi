//singleton
  
// object literals

const mySym=Symbol("key1") // declaring symbol data type

const jsUser={
    name:"ujjwal",
    "full name":"ujjwal saini",
    [mySym]:"myKey1",//this is the above symbol which we declared above object
    age:21,
    location:"saharanpur",
    email:"ujjwal@gmail.com",
    isLoggedIn:false,
    lastLoggedInDays:["monday","saturdsay"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
//above three are the ways to access the objects
// console.log(typeof jsUser.mySym); it is not printing the symbol,it is taking mySym as string
// Symbols are not accessible with dot notation; you must use bracket notation.
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]); //giving o/p string
// console.log(typeof mySym); //giving o/p symbol
// console.log(typeof [mySym]);//giving o/p object

// If you want to confirm that it's an array, use Array.isArray():
// console.log(Array.isArray([mySym])); // true

// jsUser.email="ujjwal@chatGpt.com"
// Object.freeze(jsUser);
// jsUser.email="ujjwal@ms.com"
// console.log(jsUser);

// Object.freeze(jsUser.email);==> to make this line work make jsUser.email a object bcoz object.freeze() only works on object

jsUser.greeting=function(){
    console.log("hello js user");
}
jsUser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())



