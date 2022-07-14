// DOM HTML

/*
   DOM এর মাদ্ধ্যমে আমরা html element change করতে পারি। 
   document.getElementById(id).innerHTML = new HTML

   
*/

// changing the value of an attributes

<img id="amarImage" src="smaily.gif" alt="image" />

const element = document.getElementById("amarImage");

                element.src = "test.jpg"; 

// Dynamic Html content

const element1 = document.getElementById("demo");
      element.innerHTML = Date();