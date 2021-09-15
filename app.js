import { quad } from "./square.js";

let button = document.querySelector("#butt");

button.addEventListener("click", function(){
    // Gets the values from the input fields AFTER the user clicks on the button
    let a = document.querySelector("#one").value;
    let b = document.querySelector("#two").value;
    let c = document.querySelector("#three").value;

    let result = quad(a,b,c);

    // Sometimes the result is NaN so this will make sure that it doesn't
    // display the result if it's not there
    if(isNaN(result[0])){
        document.querySelector("#result").innerHTML = "Error!";
    }
    else{
        document.querySelector("#result").innerHTML = "" + result[0] + " " + result[1];
    }

});