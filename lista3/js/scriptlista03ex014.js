let numFat = 6;
let f = 1;
let contadorFat = numFat;

while (contadorFat > 1) {
    f *= contadorFat;
    contadorFat--;
}

console.log("Fatorial =", f);
