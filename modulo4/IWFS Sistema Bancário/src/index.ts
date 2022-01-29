import express, { Request, Response } from 'express';
import { users } from './data';

const app = express();
app.use(express.json());

const serverPort = 3001;

app.listen(serverPort, () => {
  console.log(`O servidor é http://localhost:${serverPort}`);
});

app.get('/user', (req: Request, res: Response) => {
  res.send(users);
});

app.get('/user/balance', (req: Request, res: Response) => {
  const auth = req.headers.authorization;
  const name = req.query.name;

  const balance = users.map((info) => {
    if (info.name === name && info.cpf === auth) {
      return info.balance.map((value) => {
        return `Seu saldo atual é de ${value.value} reais`;
      });
    }
  });

  res.status(200).send(balance);
});

app.get('/user/:cpf', (req: Request, res: Response) => {
  try {
    const cpf = req.params.cpf;

    res.status(200).send(
      users.map((user) => {
        if (user.cpf === cpf) {
          return user;
        } else if (cpf !== user.cpf) {
          throw new Error(
            'CPF não cadastrado ou incorreto, por favor verifique os dados e tente novamente'
          );
        }
      })
    );
  } catch (e: any) {
    switch (e.message) {
      case 'CPF não cadastrado ou incorreto, por favor verifique os dados e tente novamente':
        res.statusCode = 404;
        break;
    }
  }
});