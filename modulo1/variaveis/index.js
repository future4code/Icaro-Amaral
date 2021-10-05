// Exercícios de interpretação de código

// 1 - Tendo em vista que na primeira linha b = 10, no console o primeiro resultado apresentado vai ser 10. Sendo assim, como b = 5 após o primeiro console.log, na segunda linha o console.log vai mostar 10 5
// 2 - Temos a=10 e b=20, sendo assim c=a, b=c, e a=b, desta forma c= 10, b=10 e a=10 (pois b=c e c=10), assim sendo, o console vai apresentar 10 10 10
// 3 - O programa divide o valor recebido ao dia pela quantidade de horas trabalhadas, dando assim o valor da hora de trabalho. Eu nomearia as variáveis como: p = horasTrabalhas t = ganhoPorDia

// Exercícios de escrita de código

//1

const nome = prompt("Qual o seu nome?")
const idade = prompt("Qual sua idade?")
console.log("Olá", nome, "você tem", idade, "anos")

// d) O tipo Undefined foi impresso pois não atribui qualquer valor às variáveis, desta forma o typeof é incapaz de indicar qual o tipo das variáveis nome e idade.
// f) Notei que ao alterar as variáveis para que eles perguntassem o nome e idade do usuário, e salvassem esses valores, o tipo delas foi alterado para String.

//2

let musica = prompt("Você coda escutando música? Sim ou não?")
let cama = prompt("Você coda deitado na cama? Sim ou não?")
let git = prompt("Você já passou raiva com o Git? Sim ou não?")
console.log("Você coda escutando música?", "-", musica)
console.log("Você coda deitado na cama?", "-", cama)
console.log("Você já passou raiva com o Git?", "-", git)

//3

let a = 10
let b = 20
c = a
a = b
b = c
console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)