export interface Client {
    name: string;
    // Nome do cliente
  
    registrationNumber: number;
    // Número de cadastro do cliente na concessionária funcionando como ID
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }