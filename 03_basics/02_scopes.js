// var c=300
if(true){
    let a=10
    const b=50
    // var c=30
    //c=30
}

// console.log(a)
// console.log(b)
// console.log(c)


/* another concept*/

function one(){
    const username="hitesh"
    function two(){
        const website="utube"
        console.log(username)
    }
    // console.log(website)
    two();
}
// one();





/* new example   */

if(true){
    const username="ujjwal"
    if(username==="ujjwal"){
        const website="utubee"
        // console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)


/********intereesting example******************/

console.log(addOne(5))

function addOne(num){
    return num+1
}

// console.log(addTwo(5))=> cannot write this here
const addTwo=function(num){
    return num+2;
}

console.log(addTwo(5))





