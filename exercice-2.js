let num = prompt("Choisir un chiffre :");

function suite(num) {
    let x = 0;
    let y = 1;
    let somme =0;
    console.log (x);
    console.log (y);
    document.write(x,"<br>", y);
    for (let i = 2; i <= num; i++) {
        somme = x + y;

        x = y;

        y = somme;
        document.write("<br>"+somme);
    }
}

console.log(suite(num));