function sayMyName(){
    console.log("ujjwl");
}
// sayMyName;//refrence
// sayMyName();//execution

// function addTwoNum(num1,num2){
//    console.log(num1+num2);
// }
// above function is not returning anything ,it is only printing the sum


function addTwoNum(num1,num2){
//   let result=num1+num2;
//   return result;
return num1+num2;
}
const result=addTwoNum(3,4);
// console.log("result is: " ,result);


function loggInUserMessage(userName="sam"){
    if(!userName){
        console.log("please enter a username ")
        return ;
    }
    return `${userName} just logged in`;
}
// console.log(loggInUserMessage("ujjwal"));


/*   concept */

// function calculateCartPrice(val1,val2, ...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,300,400,500,600,400,));



// below we are passing object to the function.
const user={
    userName:"ujjwal",
    price:166
}
function handleObject(anyObject){
 console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}. `)
}
// handleObject(user);
handleObject({
    userName:"sam",
    price:256
})



/* using array in function */

const newArray=[200,540,600]
function returnValue(getArray){
  return getArray[2];
}
// console.log(returnValue(newArray));
console.log(returnValue([200,400,6005,500]));