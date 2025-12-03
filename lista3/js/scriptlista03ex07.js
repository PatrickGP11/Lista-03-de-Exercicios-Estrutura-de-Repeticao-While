let p = 29;
let divisor = 2;
let primo = true;

while (divisor < p) {
    if (p % divisor === 0) {
        primo = false;
        break;
    }
    divisor++;
}

console.log(primo ? "É primo" : "Não é primo");