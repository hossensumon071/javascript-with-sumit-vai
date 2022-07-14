// Javascript Object itareble

/*
যার মদ্ধে দিয়ে iterate করা যায় মানে একটা একটা করে লুপ করা যায় এবং যেখানে order আছে এবং সে order দরে দরে step by step যেতে পারি সেইগুলো হচ্ছে iterable যেমন array একটা iterable আবার string ও একটা iterable কারন এইগুলোর মদ্ধে দিয়ে step by step যেতে হয়। আবার objcet কিন্ত iterable নয়। 
*/

const numbers = [1,2,3,4,6,4,5]

for(let i=0; i< numbers.length; i++){
    console.log(numbers[i]);
}
// এই লুপকে আবার আর এক বাভে অ লিখা যাই আর তা হচ্ছে,
for (let n of numbers) {
    console.log(n)
}

/*
এখানে for loop automitaclly কাজ করছে, একটা করে কাজ শেষ করে সে আবার পরের লুপে চলে যাচ্ছে এবং যতক্ষন পর্যন্ত i< numbers.length এই condition টা টীক থাকছে ততক্ষন পর্যন্ত আবার সেই লুপ টা continue করছে।

সে যে এই লুপটা করতে পারছে কারন এখানে array হচ্ছে একটা iterable কারন array তে order আছে এবং step by step জেতে পারছে এখানে সে automitically সে পরের জায়গায় চলে জেতে পারছে। 

এখন কথা আমরা এখানে আর‍্য যায়গায় যদি object কে লুপ করতে দিতাম তাহলে সে লুপ হত না কারন iterable না তাই। 
আবার আমরা জানি array ও একধরনের object, তাহলে array কিভাবে লুপ হচ্চে এর একটি কারন রয়েছে 

আপনি যখন object এবং array এর prototype এর ভিতর যাবেন তখন দেখবেন Symbol(Symbol.iterator) বলে একটা property আছে array এর prototype chain আছে । যা object এর prototyper বিতর নাই, আর তাই array iterable হচ্ছে but object এর iterable নাই। 

iterator - Symbol(Symbol.iterator)এইটা কে iterator বলে। যেই জিনিশ টার মাদ্ধমে কোন      
           iterable iterate করতে পারে মানে step by step যেতে পারে সেই জিনিশ টাই হচ্ছে Symbol.iterator বা
           iterator

iterable - array,string এই গুলো হচ্ছে iterable। যার মদ্ধ্য iterate করা যায়, যার মদ্ধ্যে Symbol.iterator
           আছে তাকে iterable বলে। 


javascript কি করে যখন iterable মদ্ধ্য দিয়ে for loop করে তখন প্রথম ধাপে প্রগ্রামারের কাজ টোকু করে 
        console.log(n)
এই কাজটুকো করার পর দেখে আর কোন কাজ নাই তারপর সে simply (Symbol.iterator) যে ফাংশন javscript নিজে automitically কল করে দেয় যার কারনে automatic পরের step এ চলে যায় step আমাদের কে করতে হই না। আর এটাই হচ্ছে fundamnetal concept লুপের। 


Symbol.iterator এইটা একটা ফাংশন। আর এই ফাংশন টা যদি আমি কল করে দেয় তাহলে একটা array Iterator পাওয়া যাবে।
আবার যখন এর prototype এর ভিতর যাবেন তাহলে দেখবেন next() নামে আর একটা ফাংশন আছে। আর এটাই হচ্ছে iterator বৈশিষ্ট । তাহলে iterator মদ্ধ্যে next function এর implemantation আছে। iterator একটা object যার মদ্ধ্যে next() নামের একটা ফাংশন আছে। 


The iterator prtocol defines how to produce a sequence of values from an object 
     an object becomes an iterator when it implements a next() method 
     the next() method must return an object with two properties 
         . value(the next value)
         . done(true or false)


*/

const myNumbers = {};

// make it iterable
myNumbers[SYmbol.iterator] = function () {
    let n = 0;
    let done = false;
    return {
        next() {
            n += 10;
            if(n == 100) {done = true}
            return {
                value: n,
                done: done
            }
        }
    }
}

for (let num of myNumbers) {
    console.log(num);
}