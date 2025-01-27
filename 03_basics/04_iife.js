(function chai(){
    // named IIFE
    console.log(`DB connected`);
})();
// (fxn defn)()->this parenthesis calls the function 

// (()=>{
    // unnamed IIFE 
//     console.log(`DB connected two`);
// })()

((name)=>{
    // unnamed IIFE with parameter
    console.log(`DB connected to ${name}`);
})('ujjwal')