// DOM CSS

// javascript এ css কে style করতে হলে যা করতে হবে 

const p = document.querySelector("#demo");

p.style.color = 'red';
p.style.fontSize = "30px";

setTimeout(function(){
    const p = document.querySelector("#demo");
    p.style.color = 'red';
    p.style.fontSize = "30px";
}, 2000)