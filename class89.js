// Javascript DOM Element

/*
   আমরা যখন document.getElementsByClassName() নামক method টা Use করি তখন সে একটা array দেয় । আবার যখন 
   document.getElementsByTagName() নামক method টা Use করি তখন সে একটা collection দেয়। 

   আবার আমরা চাইলে ডোম থেকে css selector এর মাদ্ধমে ও html elements খুজে বের করতে পারি 
   document.querySelector("#demo")
   document.querySelector(".demo")
*/


const x = document.forms["frm1"];

let text = "";

for(let i = 0; i < x.length i++ ){
    text += x.elements[i].value + "<br>";
}

document.getElementById("demo").innerHTML = text;