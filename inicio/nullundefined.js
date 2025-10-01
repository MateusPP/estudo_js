let valor // nao inicializada
console.log(valor);

valor = null //ausencia de valor
console.log(valor);
//console.log(valor.toString()); gera erro

const produto = {}
console.log(produto)
console.log(produto.preco)

produto.preco = 3.5
console.log(produto.preco)
produto.preco = undefined //nao recomendavel
console.log(!!produto.preco)
console.log(produto)
//dele produto.preco
produto.preco = null  // sempre preco opcao melhor pra limpar valor
console.log(!!produto.preco)
console.log(produto)

