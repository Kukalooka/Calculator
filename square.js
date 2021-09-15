// Shows zeros of a quadratic function

function quad(a, b, c){

    // Calculates delta for later
    let delta = Math.pow(b, 2) - 4 * a * c;

    let xo = (-b - Math.sqrt(delta)) / (2 * a);
    let xt = (-b + Math.sqrt(delta)) / (2 * a);

    return {xo, xt};
}

export {quad}