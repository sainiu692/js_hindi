
function x(){
    for(var i=1;i<=5;i++){
        setTimeout(() => {
            console.log(i);
        }, i*1000);
    }
    console.log("namaste javascript");
}
x();

// Step-by-Step Execution:


// x() function is called.

// Loop Execution (for loop runs from i = 1 to i = 5):

// Each iteration schedules a setTimeout callback to run after i * 1000 milliseconds.

// Since setTimeout is asynchronous, it does not pause the loop.

// The loop completes execution almost instantly, before any of the timeouts actually run.

// Console logs "namaste javascript" immediately (because it’s outside the setTimeout calls).

// After the loop completes, i is now 6 (since var is function-scoped).

// Callbacks from setTimeout execute after their respective delays.

// However, since the loop has already finished, all setTimeout functions use the final value of i, which is 6.

// Why does it print 6 five times?

// The issue is caused by the use of var, which is function-scoped.

// Since setTimeout callbacks execute after the loop has finished, they all refer to the same variable i, which is 6 after the loop completes.


// ✅ Why does this work?

// let is block-scoped, so a new i is created for each iteration.
// Each setTimeout closure remembers the correct value of i at the time it was scheduled.

// ✅ How does this work?

// The IIFE (function(j){ ... })(i); creates a new copy of i (j) in each iteration.
// setTimeout now remembers the correct j value.