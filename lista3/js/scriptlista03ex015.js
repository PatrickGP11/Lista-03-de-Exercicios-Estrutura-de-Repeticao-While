let nomes2 = ["Ana", "Paulo", "João", "fim"];
let idades2 = [20, 40, 30];

let index = 0;
let somaI = 0;
let qtd = 0;

while (nomes2[index] !== "fim") {
    somaI += idades2[index];
    qtd++;
    index++;
}

console.log("Média das idades =", somaI / qtd);