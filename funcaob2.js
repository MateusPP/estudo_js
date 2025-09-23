//amazernar funcao em uma variavel
var imprimirSoma = function (a, b) { //function sem nome é euma funcao anonima
    var c = a + b
    console.log(c)
}

imprimirSoma(2, 7)
//armazenando uma funcao arrow
var soma = (a,b) => { console.log(a+b) }
soma(2,5)

//armazenando uma funcao retorno implicitio
var soma2 = (a,b) => a + b //funcao de uma unica sentenca de codigo
console.log(soma2(3,6)) 

var imprimir = a => console.log(a) //funcao de uma unica sentenca de codigo
imprimir('testes')
