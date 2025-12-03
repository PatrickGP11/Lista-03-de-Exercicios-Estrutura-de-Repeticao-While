let limite2 = 30;
let s = 1;
let somaPares = 0;

while (s <= limite2) {
    if (s % 2 === 0) somaPares += s;
    s++;
}

console.log("Soma dos pares =", somaPares);