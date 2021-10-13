// Exercícios de interpretação de código

//1) a) O código pede ao unsuário para inserir um número para teste, em seguida ele compara o resto da divisão do número informado por 2 e então analisa se esse resto de divisão é igual a 0. Caso o resto da divisão seja igual a zero, o programa imprime no console: "Passou no teste", caso contrário, "Não passou no teste".

//b) Ele imprime no console "Passou no teste" para todos os números cujo resto da divisão por 2 seja igual a 0.

//c) A mensagem "Não passou no teste" é para todos os números cujo resto da divisão por 2 NÃO seja igual a 0.

//2 a) O código serve para pesir ao unsuário que escolha uma fruta, e então informar o valor da fruta escolhida.

//b) O valor impresso no console se o valor de fruta por Maçã será: "O preço da fruta Maçã é R$ 2.25.

//c) A mensagem impressa no console seria: "O preço da fruta Pêra é R$ 5"

//3 a) A primeira linha do código esrá pedindo ao usuário para digitar o primeiro número. A primeira linha da função if está imprimindo "Esse número passou no teste" no console caso o número digitado seja maior que 0.

//b) Se o usuário digitar o número 10, a mensagem será: "Esse número passou no teste". Se o número for -10, acredito que o console não vai imprimir nada, ao invés disso teremos uma mensagem de erro, tendo em vista que ainda não aprendemos como fazer para que números negativos sejam reconhecidos.

//c) Se o usuário digitar -10 teremos um erro no console, tendo em vista que não configuramos o programa para reconhecer números negativos.

// Exercícios de escrita de código

//1

let informedAge = prompt("Por favor digite sua idade usando números")

const informedAgeNumber = parseInt(informedAge)
const age = informedAgeNumber

if (age>=18){
    console.log("Você pode dirigir")
}else {
    console.log("Você não pode dirigir")
}

//2

let turno = prompt("Por favor informe em qual turno você estuda. Use M para Maturino, V para Vespertino, ou N para Noturno.")

if(turno==="M"){
    console.log("Bom Dia!")
}else if(turno==="V"){
    console.log("Boa Tarde!")
}else{
    console.log("Boa Noite!")
}

//3

let turno3 = prompt("Por favor informe em qual turno você estuda. Use M para Maturino, V para Vespertino, ou N para Noturno.")

switch(turno3){
    case "M":
        mensagem = "Bom Dia!"
        break;
    case "V":
        mensagem = "Boa Tarde!"
        break;
    case "N":
        mensagem = "Boa Noite!"
        break;
    default:
        mensagem = "Por favor digite M, V ou N"
        break;
}

console.log(mensagem)

//4

let genero = prompt("Por favor digite o gênero do filme. Responda com: Fantasia, Terror, Ação, Comédia ou Romance")
let valorIngresso = prompt("Por favor digite o valor do ingresso em números.")
const valorIngreReal = parseInt(valorIngresso)

if(genero==="Fantasia", valorIngreReal<15){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}

// Desafios

//1

let genero4 = prompt("Por favor digite o gênero do filme. Responda com: Fantasia, Terror, Ação, Comédia ou Romance")
let valorIngresso4 = prompt("Por favor digite o valor do ingresso em números.")
const valorIngreReal4 = parseInt(valorIngresso4)
let lanchinho = prompt("Qual lanchinho você vai comprar?")

if(genero4==="Fantasia", valorIngreReal4<15){
    console.log("Bom filme! Aproveite o seu", lanchinho)
}else{
    console.log("Escolha outro filme :(")
}

//2

// Tá enorme, tá feio, mas funciona MAIS OU MENOS com tudo que pediram e não usei nada que não nos ensinaram nas aulas. Eu consigo dar todos os valores e idenficar tudo, MAS não consegui diferenciar entra jogo Doméstico e jogo Internacional, poderiam por favor me falar o que eu errei?

let nomeCompleto = prompt("Por favor digite seu nome completo")
let tipoDeJogo = prompt("Qual o tipo de jogo? Digite IN para jogo Internacional, e DO para jogo doméstico").toUpperCase
let etapaDoJogo = prompt("Qual a etapa do jogo? Digite SF para Semi-Final, DT para Decisão de terceiro lugar, e FI para Final").toUpperCase
let categoria = prompt("Qual categoria de ingresso você deseja? 1, 2, 3 ou 4?")
let quantidade = prompt("Por favor digite a quantidade de ingressos que você deseja usando números.")
const quantidadeIngressos = parseInt(quantidade)

if(tipoDeJogo==="DO", etapaDoJogo==="SF", categoria==="1") {
    const resultado = quantidadeIngressos * 1320;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Doméstico")
    console.log("Etapa do jogo: Semifinais")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: R$ 1.320,00")
    console.log("Valor Total: R$", resultado)

}else if(tipoDeJogo==="DO", etapaDoJogo==="SF", categoria==="2") {
    const resultado = quantidadeIngressos * 880;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Doméstico")
    console.log("Etapa do jogo: Semifinais")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: R$ 880,00")
    console.log("Valor Total: R$", resultado)

}else if(tipoDeJogo==="DO", etapaDoJogo==="SF", categoria==="3") {
    const resultado = quantidadeIngressos * 550;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Doméstico")
    console.log("Etapa do jogo: Semifinais")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: R$ 550,00")
    console.log("Valor Total: R$", resultado)

}else if(tipoDeJogo==="DO", etapaDoJogo==="SF", categoria==="4") {
    const resultado = quantidadeIngressos * 220;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Doméstico")
    console.log("Etapa do jogo: Semifinais")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: R$ 220,00")
    console.log("Valor Total: R$", resultado)
    
}else if(tipoDeJogo==="DO", etapaDoJogo==="DT", categoria==="1") {
    const resultado = quantidadeIngressos * 660;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Doméstico")
    console.log("Etapa do jogo: Decisão do 3º lugar")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: R$ 660,00")
    console.log("Valor Total: R$", resultado)

}else if(tipoDeJogo==="DO", etapaDoJogo==="DT", categoria==="2") {
    const resultado = quantidadeIngressos * 440;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Doméstico")
    console.log("Etapa do jogo: Decisão do 3º lugar")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: R$ 440,00")
    console.log("Valor Total R$:", resultado)

}else if(tipoDeJogo==="DO", etapaDoJogo==="DT", categoria==="3") {
    const resultado = quantidadeIngressos * 330;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Doméstico")
    console.log("Etapa do jogo: Decisão do 3º lugar")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: R$ 330,00")
    console.log("Valor Total: R$", resultado)

}else if(tipoDeJogo==="DO", etapaDoJogo==="DT", categoria==="4") {
    const resultado = quantidadeIngressos * 170;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Doméstico")
    console.log("Etapa do jogo: Decisão do 3º lugar")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: R$ 170,00")
    console.log("Valor Total: R$", resultado)

}else if(tipoDeJogo==="DO", etapaDoJogo==="FI", categoria==="1") {
    const resultado = quantidadeIngressos * 1980;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Doméstico")
    console.log("Etapa do jogo: Final")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: R$ 1980,00")
    console.log("Valor Total: R$", resultado)

}else if(tipoDeJogo==="DO", etapaDoJogo==="FI", categoria==="2") {
    const resultado = quantidadeIngressos * 1320;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Doméstico")
    console.log("Etapa do jogo: Final")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: R$ 1320,00")
    console.log("Valor Total R$:", resultado)

}else if(tipoDeJogo==="DO", etapaDoJogo==="FI", categoria==="3") {
    const resultado = quantidadeIngressos * 880;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Doméstico")
    console.log("Etapa do jogo: Final")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: R$ 880,00")
    console.log("Valor Total: R$", resultado)

}else if(tipoDeJogo==="DO", etapaDoJogo==="FI", categoria==="4") {
    const resultado = quantidadeIngressos * 330;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Doméstico")
    console.log("Etapa do jogo: Final")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: R$ 330,00")
    console.log("Valor Total: R$", resultado)

}else{
    console.log("Por favor tente novamente e se atente às instruções fornecidas");    
}


if(tipoDeJogo==="IN", etapaDoJogo==="SF", categoria==="1") {
    const resultado = (quantidadeIngressos * 1320) * 4.10;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Internacional")
    console.log("Etapa do jogo: Semifinais")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: U$", (1.320 * 4.10))
    console.log("Valor Total: U$", resultado)

}else if(tipoDeJogo==="IN", etapaDoJogo==="SF", categoria==="2") {
    const resultado = (quantidadeIngressos * 880) * 4.10;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Internacional")
    console.log("Etapa do jogo: Semifinais")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: U$", (880 * 4.10))
    console.log("Valor Total: U$", resultado)

}else if(tipoDeJogo==="IN", etapaDoJogo==="SF", categoria==="3") {
    const resultado = (quantidadeIngressos * 550) * 4.10;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Internacional")
    console.log("Etapa do jogo: Semifinais")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: U$", (550 * 4.10))
    console.log("Valor Total: U$", resultado)

}else if(tipoDeJogo==="IN", etapaDoJogo==="SF", categoria==="4") {
    const resultado = (quantidadeIngressos * 220) * 4.10;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Internacional")
    console.log("Etapa do jogo: Semifinais")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: U$", (220 * 4.10))
    console.log("Valor Total: U$", resultado)
    
}else if(tipoDeJogo==="IN", etapaDoJogo==="DT", categoria==="1") {
    const resultado = (quantidadeIngressos * 660) * 4.10;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Internacional")
    console.log("Etapa do jogo: Decisão do 3º lugar")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: U$", (660 * 4.10))
    console.log("Valor Total: U$", resultado)

}else if(tipoDeJogo==="IN", etapaDoJogo==="DT", categoria==="2") {
    const resultado = (quantidadeIngressos * 440) * 4.10;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Internacional")
    console.log("Etapa do jogo: Decisão do 3º lugar")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: U$", (440 * 4.10))
    console.log("Valor Total U$:", resultado)

}else if(tipoDeJogo==="IN", etapaDoJogo==="DT", categoria==="3") {
    const resultado = (quantidadeIngressos * 330) * 4.10;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Internacional")
    console.log("Etapa do jogo: Decisão do 3º lugar")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: U$", (330 * 4.10))
    console.log("Valor Total: U$", resultado)

}else if(tipoDeJogo==="IN", etapaDoJogo==="DT", categoria==="4") {
    const resultado = (quantidadeIngressos * 170) * 4.10;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Internacional")
    console.log("Etapa do jogo: Decisão do 3º lugar")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: U$", (170 * 4.10))
    console.log("Valor Total: U$", resultado)

}else if(tipoDeJogo==="IN", etapaDoJogo==="FI", categoria==="1") {
    const resultado = (quantidadeIngressos * 1980) * 4.10;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Internacional")
    console.log("Etapa do jogo: Final")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: U$", (1980 * 4.10))
    console.log("Valor Total: U$", resultado)

}else if(tipoDeJogo==="IN", etapaDoJogo==="FI", categoria==="2") {
    const resultado = (quantidadeIngressos * 1320) * 4.10;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Internacional")
    console.log("Etapa do jogo: Final")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: U$", (1320 * 4.10))
    console.log("Valor Total U$:", resultado)

}else if(tipoDeJogo==="IN", etapaDoJogo==="FI", categoria==="3") {
    const resultado = (quantidadeIngressos * 880) * 4.10;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Internacional")
    console.log("Etapa do jogo: Final")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: U$", (880,00 * 4.10))
    console.log("Valor Total: U$", resultado)

}else if(tipoDeJogo==="IN", etapaDoJogo==="FI", categoria==="4") {
    const resultado = (quantidadeIngressos * 330) * 4.10;
    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nomeCompleto)
    console.log("Tipo do jogo: Internacional")
    console.log("Etapa do jogo: Final")
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantidadeIngressos)
    console.log("---Valores---")
    console.log("Valor do Ingresso: U$", (330 * 4.10))
    console.log("Valor Total: U$", resultado)

}else{
    console.log("Por favor tente novamente e se atente às instruções fornecidas");
    }