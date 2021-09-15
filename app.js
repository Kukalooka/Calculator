import { quad } from "./square.js";

let button = document.querySelector("#butt");

button.addEventListener("click", function(){
    let a = document.querySelector("#one").value;
    let b = document.querySelector("#two").value;
    let c = document.querySelector("#three").value;

    console.log(quad(a,b,c));
});