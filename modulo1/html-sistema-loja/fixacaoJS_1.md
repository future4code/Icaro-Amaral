```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const salarioFixo = 2000
 const comissao = qtdeCarrosVendidos * (100 + (valorDoCarro * 5/100))
 const salarioFinal = salarioFixo + comissao
 return salarioFinal
}