// Javascript HTML DOM elements (Nodes)


// creating New Html elements (Nodes)

const para = document.createElement("p"); 
const node = document.createTextNode("Hello world");

para.appendChild(node); 

const element = document.getElementById("div1");

element.appendChild(para)