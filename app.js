import { quad } from "./square.js";

let button = document.querySelector("#butt");

button.addEventListener("click", function(){
    let a = document.querySelector("#one").value;
    let b = document.querySelector("#two").value;
    let c = document.querySelector("#three").value;

    let result = quad(a,b,c);

    if(isNaN(result[0])){
        document.querySelector("#result").innerHTML = "Error!";
    }
    else{
        document.querySelector("#result").innerHTML = "" + result[0] + " " + result[1];
    }

});