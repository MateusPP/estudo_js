{{{ var sera = 'será' }}}

//variaverl var sera visisel em qual parte do bloco a menos que ela seja criada dentro de uma funcao
console.log(sera);

function teste () {
    var local = 123
    console.log(local);
}


teste()

var numero = 1
{
    var numero = 2
    console.log(numero)
}
console.log(numero)