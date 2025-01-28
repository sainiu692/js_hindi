// for in loop

// const myObject = {
//   js: "javascript",
//   cpp: "cplusplus",
//   sw: "swift",
// };
// for (const keyy in myObject) {
//   console.log(`${keyy} shortcut is for ${myObject[keyy]}`);
// }

// The for...in loop in JavaScript is designed to iterate over the keys of an object. By default, it does not directly provide the values associated with those keys. Let’s break down why your code only logs the keys and how you can access the values as well.

// for in loop in arrays

// const myArray = ["hello", "hii", "namste"];
// for (const key in myArray) {
//   console.log(`${key} is for ${myArray[key]}`);
// }

// for in loop in maps
const map1 = new Map();

map1.set("in", "india");
map1.set("us", "united states of america");
map1.set("aus", "australia");
for (const key in map1) {
  console.log(key);
}
