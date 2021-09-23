// Shows zeros of a quadratic function

import { zero } from "./zero.js";
function quad(a,b,c){
    let amount = zero(a,b,c);
    let result = b*b - 4*a*c;
    if(amount > 1){
        let x1 = Math.round((-b - Math.sqrt(result)) / 2 * a);
        let x2 = Math.round((-b + Math.sqrt(result)) / 2 * a);
        return [x1, x2];
    }
    else if(amount == 1){
        let x1 = Math.round(-b / 2 * a);
        return x1;
    }
    else{
        return 0;
    }
}
export {quad}