//atividade do dia 20/10

function calculaPrecoTotal(quantidade) {
  if(quantidade < 12){
    const valor = quantidade * 1.30
  }else(quantidade >= 12){
    const valor = quantidade * 1
  }
  return valor
}