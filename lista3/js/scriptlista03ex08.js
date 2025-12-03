let limite = 50;

let a = 0, b = 1;
while (a <= limite) {
    console.log(a);
    let proximo = a + b;
    a = b;
    b = proximo;
}