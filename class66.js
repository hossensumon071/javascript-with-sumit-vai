// Javascript Object Accessors

/*

Getters and setters allow to define Object Accessors (Computed Properties)
এখানে accessors মানে হচ্ছে যার মাদ্ধ্যমে আমি access করব, যেমন ধরেন আমি কোন একটা object properties চাই কি লিখি তখন আমরা person.firstName। এই যে access করার জন্ন্য আমরা person.firstName দিচ্ছি এইটা হচ্ছে access করছি আমরা। আরা accessor হচ্ছে যার মাদ্ধ্যমে আমরা এই কাজ টা করতে পারব। আর object এর কিছু সহজ accessors হচ্ছে ২ টা Getter, Setter

Computed Properties এর বাংলা অর্থ হচ্ছে যে property টা আসলে আমাদের এখানে নেই কিন্তু আমরা Compute করতে চাচ্ছি এমন একটা property। 

*/

const person = {
    firstName: "john",
    lastName: "doe",
    age: 30, 
    language: "en",
    get fullName() {
        return this.firstName + '' + this.lastName;
    }
};

console.log(person.fullName) // result 'john doe'




const person2 = {
    firstName: "john",
    lastName: "doe",
    age: 30, 
    language: "",
    set lang(lang) {
       this.language = lang
    }
};

person.lang = "bn"

// Javascript function or getter?

/*
Why Using Getters and Setters?
   .It gives simpler syntex
   .It allows equal syntax for properties and methods
   .It can secure better data quality
   .It is useful for doing things behind-the-scenes

The Object.defineProperty() method can also be used to add Getters and Setters 
*/ 