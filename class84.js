// Asynchronous Javascript Promise


const status = false; 

console.log('Task 1');

// promise Definition
const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        if(status){
           resolve('Task 2');
        }else {
            reject('Failed')
        }
        
    },2000);
});

// promise call
promise
       .then(function(value){
           console.log(value)
        })
       .catch(function(err){
           console.log(err)
       })

console.log('Task 3');

/*
এখানে ৩ টা কাজ আছে যা পর পর হবে যেমন (Task 1, Task 2, Task 3)। এখন ধরেন Task 2 নামক কাজ টা হতে সময় লাগবে এবং এই কাজ টা fullfill হয়ে গেলে Task 4 নামক আর একটা কাজ শুরু হবে কিন্ত Task 4 নামক কাজ টা asynchronous কাজ আর  asynchronous হলে সেখানে আমাদের setTimeout,setTimeInterval এর রকম কিছু একটা বসবে ।


এখন আমরা যদি চাই Task 1 এর পরে Task 3 যদি হই তাহলে এর পরে Task 2 হতে ও পারে আবার নাও হতে পারে,এমন ধরেন যদি কিছু একটা ঘটনা ঘঠে তাহলে হবে আর না হলে Task 2 হবে না ।
const status = false; 

setTimeout(function(){
    if(status){
        console.log('Task 2');
    }else {
        console.log('Failed');
    }
    
},2000);

জাভাস্কিপ্ট যকন Task 1 শেষ করার পর 2nd line এ আসবে তখন জাভাস্কিপ্ট কিন্ত জানেনা তাকে Task 2 print করতে হবে নাকি failed prqint করতে হবে যেহুত এইটা একটা asynchronous function তাই সে কাজ টা এক জলক দেকে ৩য় লাইনে চলে যাবে। যখন ৩য় লাইনের কাজ শেষ হবে তখন জাভাস্ক্রেপ্ট ইঞ্জিন আবার সে ২য় লাইনে যাবে এবং তখন কাজ টা সম্পন্ন করবে । এখন আপনি চাচ্ছেন ২য় লাইনের কাজ টা programatically বোজতে চাচ্ছেন তখন আপনাকে সে ক্ষেএে আপনাকে ২য় লাইনের আগে একটা promise তৈরি করতে পারবেন । মানে হচ্ছে একটা প্রতিজ্ঞা আরকি । promiser define করার জন্ন্য জাভাস্কিপ্টে new Promise() একটা built in function আছে। আচ্ছা একটা প্রতিজ্ঞা যখন তৈরি করব আমি তখন সে প্রতিজ্ঞা ফুল হলে কি হবে আর ফেইল হলে কি হবে ২ টাই আমাকে বলে দিতে হবে । 
const promise = new Promise(function(resolve, reject){

});

*/

const paymentSuccess = true; 
const marks = 70;

function enroll(){
    console.log("course enrollment is in progress");

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(paymentSuccess){
                resolve();
            } else {
                reject('Payment failed')
            }
        },2000);
    });

    return promise;
}

function progress(){
    console.log('Course on progress.....');
    
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(marks>= 80){
                resolve();
            }else {
                reject('you could not get enough marks to get the certificate');
            }
        },3000);
    });

    return promise;
}

function getCertificate(){
    console.log('Congrats, you got the certificate');

    const promise = new Promise(function(){
        setTimeout(function(){
            console.log('you got the certificate');
        },1000);
    });

    return promise; 
}

enroll()
        .then(progress)
        .then(getCertificate)
        .then(function(value){
            console.log(value)
        })
        .catch(function(err){
            console.log(err)
        })