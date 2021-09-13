function kwadrat(a, b, c){
    let delta = Math.pow(b, 2) - 4 * a * c;

    let xo = (-b - Math.sqrt(delta)) / (2 * a);
    let xt = (-b + Math.sqrt(delta)) / (2 * a);

    console.log(delta, xo, xt);

    return {xo, xt};
}

exports.kwadrat = kwadrat;