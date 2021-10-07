// Exercícios de interpretação de código

// 1 - As mensagens impressas no conselo serão: a. undefined, b. null, c. 11, d. 3, e. Como o console log vai ser grande, sinceramente não sei falar de cabeça sem rodar o código, f. 9.

// 2 - O valor impresso no console será: SUBI NUM ÔNIBUS EM MIRROCOS

// Exercícios de escrita de código

//1 

let nomeDoUsuario = prompt("Por favor escolha um nome de usuário")
let  emailDoUsuario = prompt("Por favor insira seu e-mail")
console.log("O e-mail", emailDoUsuario, "foi cadastrado com sucesso.", "Seja bem-vindo(a)", nomeDoUsuario,"!")

//2

const comidasFavoritas = ["Lasanha", "Pizza", "Feijoada", "Curry", "Chocolate"]
console.log(comidasFavoritas)
console.log("Essas são minhas comidas preferidas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])
let comidaUsuario = prompt("Qual sua comida preferida?")
comidasFavoritas.splice(1, 1, comidaUsuario)
console.log(comidasFavoritas)

//3

let listaDeTarefas = []
let tarefa1 = prompt("Por favor, me fale uma tarefa que você tem que realizar hoje.")
let tarefa2 = prompt("Por favor, me fale outra tarefa que você tem que realizar hoje.")
let tarefa3 = prompt("Por favor, me fale uma última tarefa que você tem que realizar hoje.")
listaDeTarefas.splice(0, 0, tarefa1)
listaDeTarefas.splice(1, 0, tarefa2)
listaDeTarefas.splice(2, 0, tarefa3)
console.log(listaDeTarefas)
const listaDeTarefasCompleta = [tarefa1, tarefa2, tarefa3]
let tarefaCompleta = prompt("Por favor, me fale o NÚMERO de qual tarefa você já concluiu. Para lembrar, os números de suas tarefas são: 0, 1 e 2")
listaDeTarefasCompleta.splice(tarefaCompleta, 1)
console.log(listaDeTarefasCompleta)