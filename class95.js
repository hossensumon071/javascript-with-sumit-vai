// Javascript DOM EventListener

function myFunction() {
    console.log('hello world');
}

const button = document.getElementById('button');

button.addEventListener('click', function(){
    console.log('hello world');
}); 


button.addEventListener('mouseover', function(){
    console.log('hello world');
}); 

// add an event handler to the window object 

// Event Bubbling and event capture


