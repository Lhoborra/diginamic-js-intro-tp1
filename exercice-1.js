function suite(num) {
    let x = 0;
    let y = 1;
    let somme =0;
    console.log (x);
    console.log (y);

    for (let i = 2; i <= 20; i++) {
        somme = x + y;

        x = y;

        y = somme;
        console.log(somme);
        
    }
}

console.log(suite(num));