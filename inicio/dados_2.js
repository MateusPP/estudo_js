let preco=19.90;
let desconto = 0.4;

console.log(19.9*0.6);

//iniciar variavel com minuscula nova palavra letra maiscula
let precoComDesconto = preco * (1 - desconto);

console.log(precoComDesconto);

let produto = "Cardeno"; 
let categoria = "Papelaria";

//string (texto) -> sequencia de de simbolos
console.log("Produto: "+produto
    +", Categoria: "+categoria
    +", Preço: "+preco
    +", Desconto: "+desconto
);

console.log(1+1);
console.log(1+"1");//concatena pois os tipos são diferentes e js trata como uma string