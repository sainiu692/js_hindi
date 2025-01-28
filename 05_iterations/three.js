// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//   console.log(num);
// }

// const greeting = "rom rom";
// for (const greet of greeting) {
//   if (greet == " ") {
//     continue;
//   }
//   console.log(`each char is ${greet}`);
// }

// MAPS

const map1 = new Map();

map1.set("in", "india");
map1.set("us", "united states of america");
map1.set("aus", "australia");

// console.log(map1.get("in"));
// console.log(map1.get("us"));
// console.log(map1.get("aus"));
// console.log(map1)
// for (const [keyy, valuue] of map1) {
//   console.log(keyy, ':-',valuue);
// }
// for (const keyy of map1) {
//     console.log(keyy);
//   }

// OBJECTS

const myObject={
    game1:"spiderman",
    game2:"krish"
}
// for (const enjoy of myObject) {
//     console.log(enjoy)
// }
// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }

// Why myObject is Not Iterable:
// What Does "Iterable" Mean?

// An object is iterable if it implements the iterable protocol, meaning it has a [Symbol.iterator] method.

// Arrays, strings, maps, and sets are iterable by default because they implement this protocol.

// Plain objects ({}) do not implement the iterable protocol, so they cannot be used directly with for...of.

// Plain objects are not iterable by default because they don't implement the iterable protocol.

// Use for...in, Object.keys(), Object.values(), or Object.entries() to iterate over objects.

// You can manually make an object iterable by adding a [Symbol.iterator] method.
