// async-await


// Bonus Content About Asynchronous Javascript - callback, promises and async-await

/*
  জাভাস্কিপ্ট by nature একসাথে একাধিক কাজ করতে পারে না। একসাথে কেবল একটা অপারেশন ই রান করতে পারে। এ জন্ন্য জাভাস্কিপ্টেকে বলা হই single threated programming language । 


  single threated programming language বলতে কি বোঝায় তা একটা practicial example মাদ্ধ্যমে দেখা যাক। আমরা একটা simple resturant এর কথা চিন্তা করি, ধরে নিই একটা resturant এ ২টা টেবিল আছে এবং একজন waiter আছে। waiter প্রথমে customer1 এর কাছে order নিয়ে রান্না ঘরে গেল এবং যতক্ষন পর্যন্ত খাবার রান্না শেষ না হবে ততক্ষন পর্যন্ত অয়েটার ব্লক হয়ে থাকল এরপর রান্না শেষ হলে waiter খাবার নিয়ে আবার customer1 এর কাছে খাবার serve করল তারপর waiter free হল। আবার একি ভাবে আবার waiter customer2 এর কাছে গেল এবং order নিয়ে আবার রান্না ঘরে গেল এবং কিছুক্ষন অপেক্ষা করলে তারপর রান্না শেষ হলে খাবার নিয়ে customer2 এর কাছে গেল এবং অবসেশে সে free হতে পারল। এই example টা দেখানোর কারন হল javascript by default এইভাবেই কাজ করে ।
  javascript এর ক্ষেএে customer1,customer2 হল user এবং waiter হল Thread 

*/

const porccessOrder = (customer) => {
    console.log(`processing order for customer 1`);

    var currentTime = new Date().getTime();
    while(currentTime + 300 >= new Date.getTime());

    console.log(`order processed for customer 1`);
};

console.log('take order for customer 1');
porccessOrder();
console.log(`completed order for customer 1`)

/*
   javascript coode যখন browser এর ভিতরে রান করে ,bascillay jasvscript coode প্রথমে একটা machine language convert হয়ে থাকে, তারপর এ browser সেটা বোঝতে পারে। মেশিন language convert হওয়ার জন্ন্য অবশ্যয় browser এর একটা মেকানিজম আছে। browser এর ভিতরে মুলত ২টা জিনিস থাকে একটা হল Runtime Environment । Runtime Environment বলতে আমরা যখন জাভাস্কিপ্ট কোড লিখি তখন আমরা অনেক সময় দেখিনা window. কিছু ,window.setTimeout(), document.getElementbyId() এরকম document window বিভিন্ন object আমরা ব্যাবহার করে থাকি আর এই জিনিস গুলো আসে হচ্ছে রান টাইম invironment থেকে। এই Runtime environment 
   ছাড়া ও আর একটা জিনিস browser এর মদ্ধ্যে থাকে যেটা আসলে javascript এর কোডকে মেশিন কোডে রুপান্তর করে  সেটা হল javascript এর ইঞ্জিন । এক এক browser এর জন্ন্য এক এক রকম ইঞ্জিন থাকে যেমন google chome এর জন্ন্য যে ইঞ্জিন টা কাজ করে সেটা হল v8 engine , enternet explorer এর জন্ন্য chakro, friefox , opera এসব brawser এর জন্ন্য নিজিস্য ইঞ্জিন আছে । এর মদ্ধ্যে সবছেয় শক্তিশালী ইঞ্জিন হচ্ছে google chrome এর v8 engine। সকল browser এ রান টাইম environment almost similer কিন্ত ইঞ্জিন এর perfomance এর উপর নির্ভর করে browser কথ টোকু perfomance দিবে ।
   
   ইঞ্জিন এর ভিতরে আসলে ২টা জিনিস থাকে এর মদ্ধ্যে ১টা হল callstack। এখন উপরের যেই কোড টা দেখেছেন আসেন দেখি এই কোডটা কিভাবে কাজ করে । সবার প্রথমে callstack এর ভিতরে main() নামে একটা ফাংশন কল হয় এরপরে লাইন বাই লাইন পরের লাইন গুলো কল হই ।


   আমরা জানি stack হচ্ছে এক্টার পর একটা আসতে থাকে  সবার last এ যেটা সবার আগে কল হই তাই stack কে বলা হই last in first out আবার release অ বলা হয়ে থাকে।
*/

const porccessOrder1 = (customer) => {
    console.log(`processing order for customer 1`);

    setTimeout(() => {
        console.log('cooking is completed')
    }, 3000)
   
    console.log(`order processed for customer 1`);
};

console.log('take order for customer 1');
porccessOrder1();
console.log(`completed order for customer 1`)

