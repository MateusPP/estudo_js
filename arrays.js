const valores = [10, 30, 45.5, 4];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 7;
console.log(valores[4]);
console.log(valores.length);
valores.push({id: 3}, null, true, 'teste');

console.log(valores);
console.log(valores.pop());//exluir ultimo valor do array
delete valores[0];
console.log(valores);
console.log(typeof valores);