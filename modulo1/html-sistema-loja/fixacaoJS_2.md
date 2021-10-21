function calculaPrecoTotal(quantidade) {
  if(quantidade < 12){
    const valor = quantidade * 1.30
  }else(quantidade >= 12){
    const valor = quantidade * 1
  }
  return valor
}