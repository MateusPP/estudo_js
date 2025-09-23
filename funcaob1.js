//funcao sem retorno
function imprimirSoma(a, b) {
    var c = a + b
    console.log(c)
}

imprimirSoma(2, 7)
imprimirSoma(2)
imprimirSoma(2, 7, 4, 5) //nao recomendado
imprimirSoma() 

//funcao com retorno
function soma(a, b = 0) {
    return a+b
}

console.log(soma(3))
console.log(soma(3,5))
console.log(soma())