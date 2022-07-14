                                  // JS ASYNC

/*
                     Javscript callback
কলব্যাক হচ্ছে কোন একটা কাজ হওয়ার পরে সেই কাজটা আসলে পরের কাজকে কল করে দিবে। অর্থাৎ যখন একটা function কে আর একটা function এর arguments হিসেবে pass করা হয় তখন তাকে চাল্লব্যাক function বলা হয়।

a callback function can run after another function has finised
মানে হচ্ছে একটা function শেষ হওয়ার পরে যেন সেই callback function টা রান হতে পারে সেই জন্ন্যে আমরা আর একটা function এর মদ্ধ্যে সেটাকে pass করি।

*/ 

// এইটা একটা sequencial way to order display 
function display(some) {
    console.log(some)
}

function calculator(num1, num2){
    let sum = num1*num2;
    return sum;
}

let result = calculator(50,100);
dislpay(result);
/*
The problem with the first example above, is that you have to call two functions to display the result
এখানে একটা কাজকে output পাবার জন্ন্যে আমরা একটা function এর পর আর একটা function কল করছি ।আর এইটা হচ্ছে এক ধরনের প্রব্লেম।
*/


// or you could call a calculator function (calculator), and let the calculator function call the dislay function

function display(some) {
    console.log(some)
}

function calculator(num1, num2){
    let sum = num1*num2;
    display(sum);
}
alculator(50,100)
/*
The problem with the second example above, is that you can not prevent the calculator function from display the result
এখানে যেটা হচ্ছে এটা function আর একটা function এর ঊপর depended । যা আর একটা সমস্যা ।আমি খেতে চাচ্ছি কিন্ত আমার খাওয়ার সাতে অন্ন্য একটা কাজ depended হয়ে গেছে তাই আমি খেতে পারছি না কিন্ত এটা ত হওয়া উচিত না।
আমাদের প্রত্যকটা কাজ আলাদা আলাদা হওয়া উছিত ঠিক তেমনি function এর কাজ ও আলাদা আলাদা হওয়া উচিত।


Now its time to bring in a callback
*/

// callback function
    //   a callback is a function passed as an arguments to another function as an arguments

    function display(some){
        console.log(some)
    }

    function calculator(num1,num2, callback) {
        let sum = num1 * num2;
        callback(sum);
    }

    calculator(4,5,display)