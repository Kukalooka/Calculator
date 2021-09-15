import { quad } from "./square.js";

let button = document.querySelector("#butt");

button.addEventListener("click", function(){
    let a = Number(document.querySelector("#one").value);
    let b = Number(document.querySelector("#two").value);
    let c = Number(document.querySelector("#three").value);

    console.log(quad(a,b,c));
});