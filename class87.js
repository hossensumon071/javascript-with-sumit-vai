// DOM Methods

/*
   html DOM মেথড বলতে আমারা যে html element গুলো ব্যাভহার করি যেমন <p id="demo"></p> এখানে একটা p tag আছে যা paragraph কে নিদিষ্ট করে যা একটি html element। যেটা হই DOM এ এই p Tag টা object আকারে define করা আছে। মানে javascript যেটা পাবে DOM এর মদ্ধ্যে difine করা আছে p একটা object। আর এই p tag টা কে object আকারে চিন্তা করবেন। 

   method গুলো হচ্ছে জেগুলা আমরা html element এর উপরে apply করতে পারব। যেমন ধরেন এই যে p tag আছে এই ট্যাগ কে javascript এর মাদ্ধ্যমে delete করে দিবেন তাহলে আপনার এই method এর সাহাজ্যে করতে হবে।  

*/

<p id="demo"></p>

const p = document.getElementById("demo")

p.innerHTML = "Hello test 01"

// এখানে innerHTML টা p tag  object এর একটা properties । getElementById() p object এর একটা method 