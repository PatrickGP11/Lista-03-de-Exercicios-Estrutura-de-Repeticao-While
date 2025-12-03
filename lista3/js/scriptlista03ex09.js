let nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
let idades = [20, 30, 25, 40, 35];
let i2 = 0;
let somaIdades = 0;

while (i2 < 5) {
    somaIdades += idades[i2];
    i2++;
}

console.log("Média das idades =", somaIdades / 5);