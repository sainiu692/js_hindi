const userEmail = [];

if (userEmail) {
  console.log("got a user");
} else {
  console.log("dont have a user");
}

// falsy values

// false,0,-0,BigInt(0),0n->BigInt zero, "", null,undefined,Nan

//truthy values
// Non-zero numbers (1, -1, 3.14, etc.).

// Non-empty strings ("hello", "0", "false", etc.).

// Objects ({}, [], functions, etc.)

// "0",'false'," ",[],{},function(){}

// if(userEmail.length===0){
//     console.log("array is empty.")
// }

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  console.log("object is empty");
}

//Nullish coalescing operator (??): null unedfined

let val1;
// val1 = null ?? 10;
// val1=5??10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20;
console.log(val1);





// ternary operator

// condition ? true : false

const iceTeaPrice=100
iceTeaPrice>=80 ? console.log("more than 80") : console.log("less than 80")