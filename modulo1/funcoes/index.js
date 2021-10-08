// Exercícios de interpretação de código

//1) a) Tendo em vista que o retorno declara que a função deve ser multiplicada por cinco, teremos 10 no primeiro console.log, e 50 no segundo.

//b) 10 e 50.

//2) a) Essa função permite que o usuário digite um texto, e então passa o texto todo para lower case e analisa se o texto contem a palavra "cenoura", após isso ela imprime na tela true ou false caso o texto contenha "cenoura" ou não.

//b) as saídas serão: true, true, false. A ultíma será falsa porque o usuário digitou "cenouras" e o código foi criado para reconhecer apenas "cenoura"


// Exercícios de escrita de código

//1)

//a)

function meuNome () {
    console.log("Eu sou Ícaro, tenho 34 anos, moro em Governador Valadares e sou estudante da Labenu.")
}

meuNome()

//b)

function infoUser () {

    let nome = prompt("Qual seu nome?")
    let idade = prompt("Qual sua idade? Favor usar números")
    let endereco = prompt("Em qual cidade você mora?")
    let profissao = prompt("Qual sua profissão?")

    console.log("Eu sou", nome, "tenho", idade, "anos, moro em", endereco, "e sou", profissao)
}

infoUser()

//2

//a)

function somar() {
    
    let numeroA = prompt("Por favor digite um número")
    let numeroB = prompt("Por favor digite outro número")
    const numberA = parseInt(numeroA)
    const numberB = parseInt(numeroB)
    const soma = numberA + numberB
    return soma
}

const resultado = somar()
console.log(resultado)

//b)

function maiorIgual() {
    
    let numeroC = prompt("Por favor digite um número")
    let numeroD = prompt("Por favor digite outro número")
    const numberC = parseInt(numeroC)
    const numberD = parseInt(numeroD)
    const comparar = numberC >= numberD
    return comparar
}

const resultadoB = maiorIgual()
console.log(resultadoB)

//c)

function par() {
    
    let numeroE = prompt("Por favor digite um número")
    const numberE = parseInt(numeroE)
    const descobrir = numberE % 2 == 0
    return descobrir
}

const resultadoC = par()
console.log(resultadoC)

//d)

function frase() {
    
    let fraseA = prompt("Por favor, solte a imaginação digite uma frase qualquer!")
    const tamanho = fraseA.length
    const maiuscula = fraseA.toUpperCase()
    console.log(tamanho)
    console.log(maiuscula)

}

frase()

//3)

function terceiro() {
    
    let numeroF = prompt("Por favor digite um número")
    let numeroG = prompt("Por favor digite outro número")
    const numberF = parseInt(numeroF)
    const numberG = parseInt(numeroG)
    const soma3 = numberF + numberG
    const subtracao = numberF - numberG
    const multiplicacao = numberF * numberG
    const divisao = numeroF / numeroG

    console.log("Números inseridos:", numberF, numberG)
    console.log("Soma:", soma3)
    console.log("Diferença:", subtracao)
    console.log("Multiplicação:", multiplicacao)
    console.log("Divisão:", divisao)
    
}

terceiro()