// Javascript Object Prototypes

/*
জাবাস্কিপ্ট হচ্ছে prototype base language। নরমালি constructor এর ভিতর property add করা যায় না যদিও add করতে হয় তাহলে property এর সাহাজ্য নিতে হবে। 
*/

Person.prototype.country = 'Bangladesh'
// এখানে আমি Person constructor এর prototype এর ভিতর country কে add করেছি
/*
কোন একটা object এর prototype বা constructor এর prototyper ভিতর কোন কিছু add করতে পারি তাহলে  তাহলে সে টা সমস্ত object এর বিতর avialable হয়ে যাবে। 

only modify your own protoypes. Never modify the prototypes of standard javascript objects
*/