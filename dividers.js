function dzielnik(liczba){  
    let tablica = [];

    for(let test = liczba / 2; test > 0; test--){
        if(liczba % test == 0){
            tablica += test;
        }
    }

    return tablica;
}

exports.dzielnik = dzielnik;