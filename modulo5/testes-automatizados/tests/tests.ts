import { performPurchase, User } from '../src';

test('Saldo superior ao valor da compra', () => {
  const user: User = {
    name: 'Usuário',
    balance: 100,
  };

  const result = performPurchase(user, 40);

  expect(result).toStrictEqual({
    name: 'Usuário',
    balance: 60,
  });
});

test('Saldo igual ao valor da compra', () => {
  const user: User = {
    name: 'Usuário',
    balance: 50,
  };

  const result = performPurchase(user, 50);

  expect(result).toStrictEqual({
    name: 'Usuário',
    balance: 0,
  });
});

test('Saldo inferior ao valor da compra', () => {
  const user: User = {
    name: 'Usuário',
    balance: 30,
  };

  const result = performPurchase(user, 80);

  expect(result?.balance).toBeLessThan(0);
});