// Javascript Object Methods

const person = {
    firstName: "John",
    lastname: "doe",
    id: 566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

/*
এখানে person একটি object এবং তার কিছু properties এবং একটি method ও রয়েছে। fullName() এইটা হল একটি মেথড। যখন একটি object এর ভিতর কোন function থাকে তখন ওই function কে মেথড বলা হয়ে থাকে 

এখানে method কে access করতে হলে লিখতে হবে person.fullName()। আর যদি () এইটি না দেয় তাহলে function এর body টা এ return করবে শুধু। 


object এর মদ্দ্যে method add করা অনেক সহজ কাজ । 

     person.fullName: function () {
        return this.firstName + " " + this.lastName;
    }

*/