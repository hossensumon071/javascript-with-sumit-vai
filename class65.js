// Javascript Object Display 

const person = {
    name: "sumit saha",
    age: 30, 
    country: "Bangladesh"
}; 

/**
  আমরা যদি person object কে cosole.log(person) করি তাহলে এর output গুলো chrome এর developer console দেখতে পায়। এখন আমরা যদি আমাদের ব্রাউজার এই object কে দেখতে চায় তাহলে আমরা কিভাবে দেখতে পাবো 




  some coomon solution to display object here:
      .Displaying the object properties by his name.
            আমরা চাইলে কোন html file এর বিতর একটি ID দিয়ে সেই ID কে getElementByID দিয়ে ধরে তার inner.HTML এর বিতর আমাদের object কে দেখাতে পারি ।
            document.getElementByID.innerHTMl = person.name + " is " + person.age + "years old";

      .displaying the object properties in a loop 
            এখানে আমরা যখন for in loop use করি তখন কিভাবে দেখাই 
            for(let x in person) {
                console.log(x);
            }
            এখানে x টা হচ্ছে variable। for in loop কি করবে প্রতিবার লুপ এর ভিতর দিয়ে যাবে র print করবে "sumit saha", 30, "bangladesh"

            let text = ""
            for (let x in person) {
                // text = text + person[x]
                text += person[x]
            }

            document.getElementById.innerHTML = text;

            /You must use (person[x]) in the loop.
            (person.x) will not work(because x is a variable)/

        .Displaying the object using Object.values() 
            //any javascript object can be converted to an array using Object.values()
            javascript আমাদের সোবিদার জণ্ণ্য অনেকের প্রয়োজন হয় এই অব্জেক্ট  এর value গুলোকে নিবার আর তার javascript এর নিজশ্য ফাংশন  আছে Object.value()  এর মাদ্দ্যমে অ object কে display করা যায়।
            console.log(Object.values(person));
            reuturn ['sumit saha', 30, 'Bangladesh']

            আমরা জানি array এর মদ্ধ্যে (for of loop) use করতে পারি
            const personArray = Object.values(person) 
            for(x of personArray) {
                console.log(x)
            }

        .Displaying the object using JSON.stringify()
            any javascript object can be stringified (converted to a string) with the javascript function JSON.stringify()
 */