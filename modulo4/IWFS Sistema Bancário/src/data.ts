type Transactions = {
    transactionDate?: string;
    transactionValue?: number;
    transactionReceivedFrom?: string;
  };
  
  type Balance = {
    value: number;
    date: string;
    description: string;
    transactions?: Transactions[];
  };
  type Users = {
    cpf: string;
    name: string;
    birthday: string;
    balance: Balance[];
  };
  
  export const users: Users[] = [
    {
      cpf: '032.166.549.87',
      name: 'Evelim Matarrachi Ferreira',
      birthday: '18/03/1987',
      balance: [
        {
          value: 1500,
          date: '28/01/2022',
          description: 'tem 12000 reais na sua conta',
          transactions: [{}],
        },
      ],
    },
  ];