import { calc } from "./normalcalc.js";
import { quad } from "./square.js";

button.addEventListener("click", function(){
    // Gets the values from the input fields AFTER the user clicks on the button
    let a = document.querySelector("#qone").value;
    let b = document.querySelector("#qtwo").value;
    let c = document.querySelector("#qthree").value;

    let qresult = quad(a,b,c);

    // Sometimes the result is NaN so this will make sure that it doesn't
    // display the result if it's not there
    if(isNaN(qresult[0])){
        document.querySelector("#qresult").innerHTML = "Error!";
    }
    else{
        document.querySelector("#qresult").innerHTML = "" + qresult[0] + " " + qresult[1];
    }

});