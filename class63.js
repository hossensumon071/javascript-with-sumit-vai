// Javascript Object Properties

/*
. A Javascript object is a collection of unorderd properties
object এর ক্ষেএে অরডারড prperties Metter করে না। আবার array ক্ষেএে  order টা আবার দরকার এর কারনে array কে itarebale বলা হয়। 

. Properties can usually be changed, added, and deleted, but some are read only
  মানে Properties আমরা ছাইলে ডাইনামিকলি changed, added, and deleted ও করতে পারি। 

  const person = {
    name: 'Sumit,
    age: 35
  }

 . Accessing Object Properties
  
 এখানে আমরা object এর properties কে access কয়েকভাবে করতে পারি ।যেমন ধরেন

 console.log(person.age)
 console.log(person['age'])

 এখানে object এর propeties কে array আকারে ও access করা যায়। এক্ষে েএ array ভিতর propeties কে  অবশ্যয় string আকারে দিতে হবে । যেমন ['age']।  এখন এই array syntex কখন প্রয়োজন হয় তাহলে , ধরেন কোন কারনে propeties এর ভিতর dyanamically value add করতে হয় তাহলে এই array use করতে হবে । 

 let a = 'age'
 console.log(person[a]);
 
*/


// . Javascript for...in loop


    const person = {
        fname: 'Sumit',
        lname: 'saha',
        age: 35
    }
   
    let txt = ''

    for (let x in person) {
        // text = text + person[x] 
        txt += person[x]
    }



/*To access arrays inside arrays, use a (for in loop) for each arrays. 

(for in loop) অ্যারে ক্ষেএে আবার object এর বেলায় ও ব্যাবহার করা যায় */

const person2 = {
    fname: 'Sumit',
    lname: 'saha',
    age: 35,
    cars: [
        {name: "Fored", models:["Fiesta", "Focus", "Mustang"]},
        {name: "BMW", models:["320", "x3", "x5"]},
        {name: "Fiat", models:["500", "panda"]},
    ]
}

/*
    for (let i in person2.cars) {
        console.log(i)                result: 0,1,2
    }
    এখানে আমরা কিন্তু জানি যখন আমরা array ক্ষে েএ (for in loop) use করি তখন আমরা তার index গুলো পায়। আবার যখন object এর ক্ষেএে (for in loop) use করলে তার element গুলো return করে 
    
*/


for (let i in person2.cars) {
    x += "<h1>" + person2.cars[i].name + "</h1>";
    for (let j in person2.cars[i].models) {
        x += person2.cars[i].models[j];
    }
}

/*
    
javascript এ object এর যে properties গুলো আছে তার একটি হচ্ছে name আর একটি হচ্ছে value     

*/