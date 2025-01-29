// for each loop

const coding = ["ruby", "ujjwal"];
// coding.forEach(function (val) {
//   console.log(val);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

// function print(item) {
//   console.log(item);
// }
// coding.forEach(print);// here we have to give refrence of a function,not to execute the function

// coding.forEach((item,index,arr)=>{
//     console.log(item,index ,arr)
// })

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "ja",
  },
  {
    languageName: "c++",
    languageFileName: "cpp",
  },
];
myCoding.forEach((item) => {
  console.log(item);
  // console.log(item.languageFileName);
});
