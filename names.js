let baza = ["Adam", "Julia", "Marek", "Agata", "Grzegorz", "Andrzej", "Mariola", "Paulina", "Katarzyna", "Kamil"];

function los(baza){
    let string = baza[Math.floor(Math.random() * 9)];
    return string;
}

exports.baza = baza;
exports.los = los;