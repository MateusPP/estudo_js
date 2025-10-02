const funcs = []
const funcs2 = []

for (var i=0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]() // sai o ultimo numero pois o i virou uma variavel global

for (let i=0; i < 10; i++) {
    funcs2.push(function () {
        console.log(i)
    })
}

funcs2[2]() // sai o valor 2 numero pois o i esta definida com o let e como i esta dentro de um escopo  o valor de i dentro da funcao nao se alterar apos a interacoes por causa da definicao por escopo