var numero = 1

{ 
    //o let a decaracao é por escopo, sendo só visivel dentro daquele escopo
    let numero = 2

    //js dar preferencia para pegar o valor setado variavel que está no escopo menor quando o nome da variavel é o mesmo 
    console.log('dentro', numero)
}

console.log('fora', numero)

//variaveis definida com VAR pode ter escopo global, de função
//variaveis definidas com LET  pode ter escopo global, de função e de bloco