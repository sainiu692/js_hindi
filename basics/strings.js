const name="ujjwal"
const repoCount=50

// console.log(name+repoCount+" hello")
// above is outdated syntax

console.log(`hello my name is ${name} and my repo count is${repoCount}`);

const gameName= new String('ujjwalSaini-hc-com')
// console.log(typeof(name))
// console.log(typeof(gameName))

// console.log(gameName.__proto__);
// console.log(gameName[2]);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));

const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-5,12)
console.log(anotherString)

const newOne="   hitesh     ";
console.log(newOne.trim())

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('esh'))

console.log(gameName.split('-'))