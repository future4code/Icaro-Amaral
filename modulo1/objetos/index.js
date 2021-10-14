// Exercícios de interpretação de código

//1) a) Será impresso no console: Matheus Nachtergaele, Virginia Cavendish, Globo 14h.

//2 a) As informações do Juca serão impressas no primeiro console log conforme foram atribuidas, a única informação a ser trocada no segundo console log vai ser o nome, de Juca para Juba. No terceiro console log a única informação a ser trocada vai ser o nome, de Juba para Jubo já que foi atribuido a troca de a para o.

//b) Os três pontos são usados para se fazer cópias do objeto. No caso do exercício é o que permitia que as informações nome, idade e raca fossem copiadas e subsequentemente alteradas.

//3 a) False e Undefined serão impressos no console.

//b) Undefined foi impresso no console porque em nenhum momento o parametro altrua foi definido.

// Exercícios de escrita de código

//1)

const dev = {
    nome: "Ícaro",
    apelidos: ["Icão", "Totoro", "Dhylec"],
}

console.log("Eu sou,", dev.nome, "mas podem me chamar de:", dev.apelidos[0],",", dev.apelidos[1], "ou", dev.apelidos[2])

const devb = {...dev, apelidos: ["Barbudo", "Gordim", "Mestre supremo do Churrasco"]}

console.log("Eu sou,", dev.nome, "mas podem me chamar de:", devb.apelidos[0],",", devb.apelidos[1], "ou", devb.apelidos[2])

//2

const nome1 = {
    nome: "Ícaro",
    idade: 34,
    profissao: "Futuro Programador",

}

const nome2 = {
    nome: "Vlad", 
    idade: 24,
    profissao: "Gamer Profissional",

}

function criarAsListas() {
    const lista1 = [nome1.nome, nome1.nome.length, nome1.idade, nome1.profissao, nome1.profissao.length]
    const lista2 = [nome2.nome, nome2.nome.length, nome2.idade, nome2.profissao, nome2.profissao.length]
    console.log(lista1, lista2)
}
criarAsListas()

//3)

let carrinho = []
const fruta1 = {
    nome: "Banana",
    disponivel: true,
}

const fruta2 = {
    nome: "Abacaxi",
    disponivel: true,
}

const fruta3 = {
    nome: "Mamão",
    disponivel: true,
}

function adicionarNoCarrinho() {
    carrinho.push(fruta1, fruta2, fruta3)
    console.log(carrinho)
}
adicionarNoCarrinho()