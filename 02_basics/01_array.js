//array

const myArr = [1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[0])

// array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(2))

const newArr = myArr.join();
// above join() function converting array into string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

//slice,splice

console.log("A",myArr);

const myN1=myArr.slice(1,3)
console.log(myN1);
console.log("B",myArr);

const myN2=myArr.splice(1,3)
console.log(myN2);
console.log("C",myArr);

// slice() does not modify original array
// but splice()modifies the original array
