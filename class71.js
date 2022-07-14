// Javascript Maps

/*
Maps এর সাথে আসলে রিলেশন object এর । object এ যেমন [key, value] pair থাকে ঠিক তেমনি maps ও [key,value] pair থাকে।

.A maps holds key-vaue pairs where the keys can be any data type.
    const person = {
        firstName: "sumit",
        lastName: "saha"
    }
    এখানে object person এর firstName কে বলা হয় Key, "sumit" কে বলা হয় value। key এর data type object এর ক্ষে েএ সবসময় string। তাহলে person.firstName আবার একিভাবে যখন array দিয়ে access করতে হয় তখন কিন্ত লিখতে হই person['firstName']

.A Map  remembers the original insertion  order of the keys 
   এখানে maps এর ক্ষে েএ আপনি কোন order এ insert করছেন সেই order টা Important ।  কিন্ত object এর ক্ষেএে order টা Important না

.A map has a property that represnts the size of the map 
  
*/


// .Passing an array to ( new Map() )
const fruits = new Map([
    ["apples", 500],
    ["bananas", 400],
    ["oranges", 300],
])

// .create a map and use ( Map.set() )
const fruits1 = new Map();

fruits1.set("apples", 500);
fruits1.set("Bananas", 400);
fruits1.set("mangoes", 300);

// The get() method gets the value of a key in a map
    fruits1.get("apples")

// The forEach() method invokes a callback for each Key/value pair in a map: 
let text = "";
fruits.forEach (function(value, key){
    text += key + '=' + value
})