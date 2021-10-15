// Exercícios de interpretação de código

//1) Ele confere se o valor de i é menor que 5, e então cria um loop no qual ele soma +1 a i até que ele não seja mais inferior a cinco. Após isso ele vai querer que a variável valor seja igual a i somado a ele mesmo, desta forma teremos 10 como o resultado impresso no console.

//2) 

//a) Todos os números maiores que 18 serão impressos no console.

//b) Tenho que estudar mais para conseguir responder essa perguntar

//3) O resultado impresso no console seriam asteriscos aumentando gradativamente de acordo com o número de linhas informadas. No caso do exercício, o número de linhas sendo 4, teriamos: * na primeira linha, ** na segunda linha, *** na terceira linha e **** na quarta linha. 

// Exercícios de escrita de código 

//1

let pets = Number(prompt("Quantos bichinhos de estimação você tem?"))
let total = 0
let petsList = []

if(pets===0){
    console.log("Que pena! Você pode adotar um pet!")
}else{
    while(total < pets){
        total = total + 1
        petsNames = prompt("Qual o nome de um dos seus bichinhos de estimação?")
        petsList.push(petsNames)
    } 
    console.log(petsList)
}

//2

//a)

const arrayOriginala = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ] 

for( let i = 0; i < arrayOriginala.length; i++){
   const novoArraya = arrayOriginala[i]
   console.log(novoArraya)
}

//b)

const arrayOriginalb = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ] 

for( let i = 0; i < arrayOriginalb.length; i++){
   const novoArrayb = arrayOriginalb[i] / 10
   console.log(novoArrayb)
}

//c)

const arrayOriginalc = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ] 

function buscarOsPares (value) {
    if (value %2 === 0)
    return value;
}

let numerosPares = arrayOriginalc.filter(buscarOsPares)
console.log(numerosPares)

//d)

const arrayOriginald = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ] 

for( let i = 0; i < arrayOriginald.length; i++){
   const novoArrayd = arrayOriginald[i]
   console.log("O elemento do índex", i, "é:", novoArrayd)
}

//e)

 function buscarMaiorElemento(array){
    let maior = array[0]

    for( let i = 1; i < array.length; i++){
       if(array[i] > maior){
          maior = array[i]
       }
    }

    return maior
 }

 const arrayOriginale = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ] 

 const maiorNumero = buscarMaiorElemento(arrayOriginale)

 function buscarMenorElemento(array){
    let menor = array[0]

    for( let i = 1; i < array.length; i++){
       if(array[i] < menor){
          menor = array[i]
       }
    }

    return menor
 }

 const menorNumero = buscarMenorElemento(arrayOriginale)

 console.log("O maior número é", maiorNumero, "e o menor é", menorNumero)

 //Desafios

 //1 e 2) Eu vou ser sincero com vocês, não vou entregar os desafios de hoje junto com os exercícios não por não querer ou não ter como fazer, mas sim porque quero tentar fazer 
 // com tempo e por conta própria. Em relação ao segundo desafio, onde perguntam se seria complicado alterar o código, tenho que admitir que não, não seria, porque é possível 
 // encontrarmos o código completo, assim como o passo a passo, nesses links: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash 
 // e https://github.com/mdn/learning-area-pt-br/blob/master/javascript/introduction-to-js-1/first-splash/jogo-advinhe-o-numero.html. 
 // Então como PROGRAMADOR, se eu tivesse que encontrar e fazer o jogo sozinho, eu encontraria e alteraria sem grandes problemas, 
 // MAS COMO ALUNO QUE QUER APRENDER eu me recuso a fazer o desafio com o que encontrei na net, mesmo que esse seja o objetivo dele.
 // Só queria deixar registrado aqui que entendo o objetivo do segundo desafio, e sou capaz de o cumprir.