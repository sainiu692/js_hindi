// for loop
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element)

// }

// for (let i = 0; i < 10; i++) {
//   console.log(`outer loop iteration number  ${i}`);
//   for (let j = 0; j < 10; j++) {
//     console.log(`inner loop iteration ${j} of outer loop ${i}`);
//   }
// }

// for loop in array

// const myArray=["herro","shaktiman","nagraj"]
// console.log(myArray.length)
// for (let i = 0; i < myArray.length; i++) {
//   const element = myArray[i];
//   console.log(myArray[i]);
// }

// break and contuinue

// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log(`5 is detected`);
//     break;
//   }
//   console.log(`value of i is ${i}`);
// }



for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`5 is detected`);
    continue;
  }
  console.log(`value of i is ${i}`);
}
