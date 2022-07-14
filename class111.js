// Javascript validation web api

/*
    <input type="number" id="id1" min="100" max="300" required />
    <button onClick="validation()">ok</button>

    <p id="demo"></p>
*/

function validation() {
    const inputObj = document.getElementById("id1");

    if(!inputObj.checkValidity()){
        document.getElementById("demo").innerHTML = inputObj.validationMessage; 
    }
}
