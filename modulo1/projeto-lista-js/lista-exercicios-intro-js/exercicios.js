// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let base = prompt("Por favor insira a base do retângulo")
  let altura = prompt("Por favor insira a altura do retângulo")
  const baseN = parseInt(base)
  const alturaN = parseInt(altura)
  const area = baseN * alturaN
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoNasceu = prompt("Por favor digite por completo o ano em que você nasceu. Favor usar números.")
  let anoAtual = prompt("Por favor digite por completo o ano atual. Favor usar números.")
  const anoNasN = parseInt(anoNasceu)
  const anoAtuN = parseInt(anoAtual)
  const idade = anoNasN - anoAtuN
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc
}
calculaIMC(85, 1.8)
console.log(imc)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade? Por favor use números.")
  const email = prompt("Por favor digite seu email")
  console.log('Meu nome é', nome, 'tenho', idade, 'anos, e meu email é', email)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Por favor me fale uma de suas cores favoritas")
  let cor2 = prompt("Por me fale outra de suas cores favoritas.")
  let cor3 = prompt("Por favor me fale uma terceira cor favorita.")
  const cores = [cor1, cor2, cor3]
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const novaString6 = string.toUpperCase()
  return novaString6

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const espetaculo = custo
  const ingressos = valorIngresso
  const lucro = espetaculo / ingressos
  return lucro

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const comparar = string1.length === string2.length
  return comparar

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiro = array[0]
  return primeiro

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimo = array[array.length - 1]
  return ultimo

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const novaString1 = string1.toLowerCase()
  const novaString2 = string2.toLowerCase()
  return novaString1 === novaString2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}