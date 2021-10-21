console.log("Boas vindas ao jogo de BlackJack!")

function comecarOJogo(){
   const comecar = confirm("Quer iniciar uma nova rodada?")
   if(comecar === true){
      maoJogador = [comprarCarta(), comprarCarta()]
      maoComputador = [comprarCarta(), comprarCarta()]
      valorJogador = maoJogador[0].valor + maoJogador[1].valor
      valorComputador = maoComputador[0].valor + maoComputador[1].valor
      console.log("Usuário - cartas:", maoJogador[0].texto, maoJogador[1].texto, "- pontuação:", valorJogador)
      console.log("Computador - cartas:", maoComputador[0].texto, maoComputador[1].texto, "- pontuação:", valorComputador)
   
   }else{
      
      console.log("O jogo acabou")
   }
}

function comprarCarta() {
  const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const naipes = ["♦️", "♥️", "♣️", "♠️"]

  const numero = cartas[Math.floor(Math.random() * 13)]

  const naipe = naipes[Math.floor(Math.random() * 4)]

  let valor

  if (numero === "A") {
    valor = 11
  } else if (numero === "J" || numero === "Q" || numero === "K") {
    valor = 10
  } else {
    valor = Number(numero)
  }

  const carta = {
    texto: numero + naipe,
    valor: valor
  }

  return carta

}

comecarOJogo()

//travei na hora de falar quem ganhou ou perdeu, amanhã continuo