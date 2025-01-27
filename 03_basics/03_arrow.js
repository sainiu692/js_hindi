const user={
  userName:"ujjwal",
  price:665,

  welcomeMessage:function(){
    console.log(`${this.userName} , welcome to website`);
    console.log(this);
    // In the case of an object method, this refers to the object that owns the method.
    
  }
}
// user.welcomeMessage();
// // user.userName="sanpal"
// // user.welcomeMessage();
// console.log(this);
// above this is refering to empty object. 
//browser k andar jo global object hai window object hai.
// in browser it will not give empty object,it will give window object

/* **********************************************/

// function chai(){
//   let userName="ujjwal"
//   console.log(this.userName);
//   // above line not giving output,bcoz userName is a local variable not a  object property

//   // console.log(this);
// }
// chai();

// const chai=function(){
//   let userName="ujjwal"
//     console.log(this.userName);
//     // console.log(this);
// }
// chai();

// const chai=() => {
//   let userName="ujjwal"
//       // console.log(this.userName);
//       // console.log(this);
// }
// chai();

// const addTwoNum=(num1,num2) => {
//   return num1+num2;
// }
// const addTwoNum=(num1,num2) =>  num1+num2;
// const addTwoNum=(num1,num2) =>  (num1+num2);

// above two type of syntax we called implicit return.


// const addTwoNum=(num1,num2) =>  ({userName:"ujjwal"})
// const addTwoNum=(num1,num2) => {return {userName:"ujjwal"}} 

// in above two line of code it is interpreted as object literal not as function body

// console.log(addTwoNum(3,4))