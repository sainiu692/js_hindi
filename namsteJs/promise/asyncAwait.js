/*
 * What is async ?
 * What is await ?
 * How async await works behind the scenes?
 * Examples of using async/await
 * Error Handling
 * Interviews
 * Async await vs Promise.then/.catch
 */

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value1");
//   }, 10000);
// });
// // const p1 = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve("Promise resolved value1");
// //   }, 5000);
// // });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value2");
//   }, 5000);
// });

// async function handlePromise() {

//     //js engine was waiting for promise to resolve,here js not wait for it ,its suspends the function execution for the time till promise is resolved,it not blocks the callstack ,if there is any other function in program in between time js will start execute that function
//   const val = await p1;
//   console.log("javascript");
//   console.log(val);

//   const val2 = await p2;
//   console.log("javascript 2");
//   console.log(val2);
// }

// handlePromise();

// // function getData() {
// //   p.then((res) => console.log(res));
// //   console.log("javascript");
// // }

// // getData();

const API_URL = "https://api.github.com/users/sainiu692";

// await can only be used inside an async function
async function handlePromise() {
  //   try {
  //     const data = await fetch(API_URL);

  //     const jsonValue = await data.json();

  //     console.log(jsonValue);
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  const data = await fetch(API_URL);

  const jsonValue = await data.json();

  console.log(jsonValue);
}

// how fetch() works
// fetch() => Response.json() => jsonValue

handlePromise().catch(err=>console.log(err));
