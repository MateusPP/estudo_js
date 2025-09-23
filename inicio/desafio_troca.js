let a = 7;
let b = 97;

let valor_temporario;

valor_temporario = b;
b = a;
a = valor_temporario;

console.log(a);
console.log(b);

[a, b] = [b, a];
console.log(a);
console.log(b);