// const tinderUser= new Object();
// above is singleton becoz we are going through constructor

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false;

// console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"ujjwal",
            lastName:"saini"
        }
    }
}
//  console.log(regularUser.fullName.userFullName)

/***merging of objects*****/
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

// const obj4={obj1,obj2,obj3}
// const obj4=Object.assign({},obj1,obj2,obj3)

const obj4={...obj1,...obj2,...obj3}

// console.log(obj4)

const users=[
    {
        id:"123bv",
        email:"h@gmail.com"
    },{
        id:"12223bv",
        email:"h@gmail.com"
    },{
        id:"123333bv",
        email:"h@gmail.com"
    }
]
// console.log(users[0].id)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// // above three line is returning us output as array,we ca ndo diffrent operations on that array.

// console.log(tinderUser.hasOwnProperty('name'))



// ******destructuring of objects**///


const course={
    courseName:"js i hindi",
    coursePrice:"999",
    courseInstructor:"hitesh"
}
const{courseInstructor:cI}=course
console.log(course.courseInstructor);
// console.log(courseInstructor);
console.log(cI);



// {
//     "name":"ujjwal",
//     "course":"js in hindi",
//     "coursePrice"="free"
// }
// above we called json,this is not object