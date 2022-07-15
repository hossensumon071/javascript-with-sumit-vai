// 1. what will be the output of the below code?
console.log([] + []); // ""

console.log({} + []); // object object


// 2. what will be the output of the below code?

function myFunction(){
    return 'Bangladesh'
}

const string = myFunction `hello`;
console.log(string); // Bangladesh


// 3. how to make all text contents of a website editable?
document.body.contentEditable = true;

// 4. what will be the output of the below code?

function b () {
    console.log(`the length is ${this.length}`)
}

let a = {
    length:  10,
    method: function (b){
        arguments[0]();
    }
}

a.method(b, 5)



// 5. what will be the output of the below code?
const a1  = 'constructor';

console.log(a[a](01));


// 6. what will be the output of the below code?
console.log(0.1 + 0.2); 


// 6. what will be the output of the below code?

console.log(("Bangladesh").__proto__.__proto__.__proto__);

// 7. make a function that sorts its arguments without using loops

const myFunction = function () {
    console.log([].slice.call(arguments));
    return [].slice.call(arguments).sorts();
}

console.log(myFunction(2,1,3,4));