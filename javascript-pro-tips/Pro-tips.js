/*
    1. How to remove falsy values of an array?
    2. convert any value to boolean
    3. How to resize an array?
    4. How to flattern a multidimentional array? 
    5. How to use short conditionals?
    6. How to replace to all occurences of a string?
    7. How to log variables with values properly?
    8. How to calculate performance of a task/oparation? 
*/

// 1. How to remove falsy values of an array?
        /*
           আমরা জানি জাভাস্কিপ্টে ৬ টা falsy values থাকে (false, 0, null, undifined, blank, NaN)। 
           এইগুলা ছাড়া আমাদেরকে অন্ন্য ভ্যালু বের করে আনতে হবে এবং এইগুলাকে বাদ দিতে হবে । 
         
           Boolean(expression) in js returns true/false
                ধরে নেন Boolean যে ফাংশনটা আছে সেটার মদ্ধ্যে যদি আমরা কোন expression দেয় তাহলে সেটা true or false return করে । এইটা javascript এর একটা  built in function। 
                Boolean(5>6) false
                Boolean(200>100) true 
                Boolean('javascript') true
                Boolean('') false

           আমরা জানি array.filter() method টা আছে তার ভিতরে parameter হিসেবে একটা callbakc function দিতে হয়। যে function টা কে js কল করে। 

           array.filter(function(element) {})
         */

let miscellanous = ['apple', false, 'orange', NaN, 0, undefined, 'chili', null, 'mango', ''];

// passing Boolean to array.filter() will remove falsy values from array

let fruits = miscellanous.filter(Boolean);

console.log(fruits) //['apple','orange', 'chili', 'mango',]


// 2. convert any value to boolean

     console.log("mashrafi") // mashrafi

     // using !! in front of any value
     console.log(!!"mashrafi"); // true
     console.log(!!1); // true
     console.log(!!0); // false
     console.log(!!undefined); // false

    //  we can also use Boolean() to achive same
    console.log(Boolean("mashrafi"))  //true


// 3. How to resize an array?

  let animals = ['dog', 'elephent', 'cat', 'frog']

  // we can use array's length property
  animals.length = 3

  console.log(animals) //['dog', 'elephent', 'cat']


// 4. How to flattern a multidimentional array? 

          let names = ["amir", ["khan", "mia"], "sumon", ["sayma", "maisha"]];

           // we can use flat() method to flattern one level array
           console.log(names.flat()); //["amir", "khan", "mia", "sumon", "sayma", "maisha"]

           // multi level array 
           let names2 = ["amir", ["khan", "mia",["moshir", "Jannat"]], "sumon", ["sayma", "maisha"]];  

           // we can use 'Infinity' parameter to array.flat() function
           console.log(names.flat(Infinity)) //["amir", "khan", "mia","moshir", "Jannat", "sumon","sayma", "maisha"];


// 5. How to use short conditionals?

const captain = "mashrafi";

// Instead of doing this
if(captain === "mashrafi") {
    console.log("love");
}

// we can use &&
captain === "mashrafi" && console.log("love")

// and instead of doing this
if(captain !== "mashrafi") {
    console.log("love");
}

// we can use ||
captain === "mashrafi" || console.log("love")



// 6. How to replace to all occurences of a string?

        const quote = "react is a JS framework and this framework is the most popular front-end faramework right now";

        // replace all occurences of 'framework' with 'library'
        console.log(quote.replace(/framework/g, "library")); // react is a JS library and this library is the most popular front-end library right now
        


// 7. How to log variables with values properly?

const library1 = "jequery";
const library2 = "react";

// Instead of doing this
console.log(`library1 - ${library1}`); //library1 - jequery
console.log(`library2 - ${library2}`); //library2 - react

// we can do this 
console.log({library1 }); //{library1: 'jequery'}
console.log({library2 }); //{library2: 'react'}


// 8. How to calculate performance of a task/oparation? 

const startTime = performance.now();

for(let i = 0; i <= 50; i++) {
    console.log(i);
}

const endTime = performance.now();

console.log(`loop took ${endTime - startTime} miliseconds to finish`);