// Javascript Function Defination 

/*
Javascript Functions are define with the function keyword 
You can use a function decleration or a function expression
 */

// Function decleration

function functionName(parameters) {
    // code to be executed
}

/*
 Declared function are not executed immediatly. They are "saved for later use", and will be executed later, when they are invoked(called upon)
 আমরা যখন করি তখন সাথেসাথে execute হয় না। তারা পরবর্তীতে ব্যভহারের জন্ন্য save থাকে। function call or invoked দুই টা একি কথা। 
*/

/* Semicolon are Used to separate executable javascrit statements. Since a function Declaration is not an executable statement, it is not common to end it with a semicolon */


// Function Expression

/*
A javascript function can also be defined using an expression
A function expression can be stored in a variables
after a function expression has been stored in a variable, the variable can be used a function
একটা function কে একটা variable মদ্ধ্যে রেখে দেওয়া কে function expression বলে। আর তখন ওই variable যেখোন জায়গায় function হিসেবে use করা যায়। 
*/

const x = function() {
    return a*b
}

/*
যে function এর কোন নাম থাকেনা তাকে annonymous function বলে। উপরের x নামক function টি একটি annonymous function.


function defined using an expression are not hoisted
মানে হচ্ছে যখন আমরা expression আকারে function কে defined করি তখন সেই function টি hoisted হয় না ।

*/

// Self-Invoking Function 
   /*
   যেই function নিজেই নিজেকে কল করতে পারে সেই function কে self-invoking function বলা হয়। এবং এই function কে annonymous function অ বলা হয়।
   */

    (function () {
        console.log("hi im here");
    })(); //self-invoking function -> IIFE 