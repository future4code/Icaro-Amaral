//Exercícios de Classes e Encapsulamento

//Exercício 1

//a) Pelo que entendi, ele serve para executar ações dento da instância de classe, e o invocamos usando o comando "new" ao declarar uma variável.

//b)

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(cpf: string, name: string, age: number) {
      console.log('Invocando o construtor da classe UserAccount');
      this.cpf = cpf;
      this.name = name;
      this.age = age;
    }
  
    public getName() {
      return this.name;
    }
  
    public getCPF() {
      return this.cpf;
    }
  
    public getAge() {
      return this.age;
    }
  
    public getBalance() {
      return this.balance;
    }
  
    public getTransactions() {
      return this.transactions;
    }
  }
  
  const cliente = new UserAccount('333.333.333-33', 'Dhylec', 30);
  console.log(cliente.getTransactions());
  
  // A mensagem foi impressa uma única vez no terminal
  
  //c) Pelo que entendo, temos acesso à propriedade privada de uma classe ao fazer um "getter", tornando uma propriedade privada, pública.
  
  //Exercício 2

  class Transaction {
    private description: string;
    private value: number;
    private date: string;
  
    constructor(description: string, value: number, date: string) {
      this.description = description;
      this.value = value;
      this.date = date;
    }
  
    public getDescription() {
      return this.description;
    }
  
    public getVale() {
      return this.value;
    }
  
    public getDate() {
      return this.date;
    }
  }