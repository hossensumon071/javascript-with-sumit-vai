// Javascript HTML DOM Animation
/*
<style>
    #container{
        width: 400px;
        height: 400px;
        position: relative;
        background: yellow;
    }
    .animate{
        width: 50px;
        height: 50px;
        position: absolute;
        background-color: red;
    }
</style>

<div class="container">
    <div class="animate">
        My animation will go here
    </div>
</div>

*/

function myMove() {
   const animate = document.getElementById("animate");
   let pos = 0;

   const interval = setInterval(frame, 5);

   function frame() {
    if(pos < 350) {
      pos++; 
      animate.style.top  = pos + "px";
      animate.style.left = pos + "px"; 

    } else {
        clearInterval(interval);
    }
      
   }
}

<button onClick="myMove()">Animate</button>