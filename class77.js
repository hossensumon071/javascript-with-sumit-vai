// Javascript Clousers

/*
  .Javascript variables can belong to the local or global scope.
  .Global variables can be made local(private) with clousers
*/




/*
.A function can access all variables defined inside the function,
এখানে বলা হয়েছে যে একটি function সে access করতে পারে সেই function এর ভিতরের variables কেও

*/
function myFunction() {
    let a = 4;
    return a * a; 
}



let a = 4;
function myFunction(){
    return a*a; 
}