import { User } from './user';

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log('Invoca o construtor da classe Customer');
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const cust = new Customer('9', 'vladslash1987@gmail.com', 'teste', '987', '987456321');