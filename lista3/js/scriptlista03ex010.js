let c = 0, d2 = 1;
let contador = 1;

while (contador <= 20) {
    console.log(c);
    let temp = c + d2;
    c = d2;
    d2 = temp;
    contador++;
}