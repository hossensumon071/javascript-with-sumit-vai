// javascript synchronous way তে কাজ করে মানে একটার পর একটা কাজ করে। আর এঈটা হচ্ছে javascript এর defeault behaviour. Javascript এ setTimeout() নামে একটা built in function আছে, এই function টা কি করে ২টা প্যারামিটার নেয়। প্রথমটা হল একটা function Perameter নেয় ।আমরা জানি কোন একটা function এর মদ্ধ্যে যদি perameter হিসেবে আর একটা function যাই তাহলে এই function কে বলা হই কলব্যাক function। তাহলে setTimeout() এর ভিতরে প্রথম perameter হিসেবে একটি কলব্যাক function নেই। আর সেকন্ড প্যারামিটার হিসেবে একটা টাইম আউট প্যারামীটার নেই। 

setTimeout(function(){

    console.log('hello world')

}, 1000)

