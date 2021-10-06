//Exercícios de interpretação de código

//1 - As mensagens apresentadas no console serão: a) false, b) false, c) true, d) boolean

// 2 - O problema é que ele não conversei as variáveis, que no momento são do tipo string, para variáveis do tipo número. Sendo assim o que vai aparecer no console são os dois números digitados ao invés da soma deles.

// 3 -o A solução que eu apresentaria a meu colkega seria: Se você criar duas novas variáveis, sendo elas a conversão das duas existentes em variáveis do tipo número usando o parseInt, e então somar essas novas variáveis, você vai obter a soma que deseja. Ficaria assim:
//let primeiroNumero = prompt("Digite um numero!")
//let segundoNumero = prompt("Digite outro numero!")
//const primeiroNumeroFormatado = parseInt(primeiroNumero)
//const segundoNumeroFormatado = parseInt(segundoNumero)
//const soma = primeiroNumeroFormatado + segundoNumeroFormatado
//console.log(soma)

// Exercícios de escrita de código

//1

let idadeUsuario = prompt("Qual sua idade?")
let idadeAmigo = prompt("Qual a idade do seu melhor amigo?")
const idadeUsuarioNumero = parseInt(idadeUsuario)
const idadeAmigoNumero = parseInt(idadeAmigo)
const diferencaIdades = idadeUsuarioNumero - idadeAmigoNumero
console.log("Sua idade é maior que a do seu amigo?", idadeUsuarioNumero > idadeAmigoNumero)
console.log(diferencaIdades)

//2

let numeroPar = prompt("Por favor insira um número PAR")
const numeroParConvertido = parseInt(numeroPar)
const divisor = 2
const resultado = numeroParConvertido % divisor
console.log(resultado)

//c) O resto da divisão com números pares sempre será 0, tendo em vista que não resta nada quando dividimos um número par por 2.

//d) Se o usuário inserir um número impar o resto da divisão sempre será 1.

//3

let idadeUsuario3 = prompt("Por favor digite sua idade em ANOS")
const idadeUsuarioConvertido = parseInt(idadeUsuario3)
const meses = 12
const dias = 365
const horas = 24
const idadeEmMeses = idadeUsuarioConvertido * meses
const idadeEmDias = idadeUsuarioConvertido * dias
const idadeEmHoras = idadeEmDias * horas
console.log("Você sabia que você já viveu por", idadeEmMeses, "Meses?")
console.log("Isso é o mesmo que", idadeEmDias, "dias!")
console.log("E acredite ou não, é o mesmo que", idadeEmHoras, "horas! Incrível!")

//4

let primeiroValor = prompt("Por falor, digite um número qualquer")
let segundoValor = prompt("Por favor, digite outro número")
const primeiroValorConvertido = parseInt(primeiroValor)
const segundoValorConvertido = parseInt(segundoValor)
console.log("O primeiro número é maior que o segundo?", primeiroValorConvertido > segundoValorConvertido)
console.log("O primeiro número é igual ao segundo?", primeiroValorConvertido === segundoValorConvertido)
console.log("O primeiro número é divisível pelo segundo?", primeiroValorConvertido % segundoValorConvertido == 0)
console.log("O segundo número é divisível pelo primeiro?", segundoValorConvertido % primeiroValorConvertido == 0)
