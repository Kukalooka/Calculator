function zero(a,b,c){
    let amount = b*b - 4*a*c;
    if(amount > 0){
        return 2;
    }
    else if(amount == 0){
        return 1;
    }
    else{
        return -1;
    }
}
export {zero}