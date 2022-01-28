import express, { Request, Response } from 'express';
import { users } from './data';

const app = express();
app.use(express.json());

const serverPort = 3001;

app.listen(serverPort, () => {
  console.log(`O servidor é http://localhost:${serverPort}`);
});

// Exercícios

// Exercício 1

app.get('/list', (req: Request, res: Response) => {
  res.status(200).send(users);
});

//a) O método HTTP que deve ser utilizado é o método get.
//b) A entidade usada é '/list'.

// Exercício 2

app.get('/list/users', (req: Request, res: Response) => {
  try {
    const userType = req.query.type as string;
    if (!userType) {
      throw new Error('Tipo de usuário não existe ou não encontrado');
    }
    const types = users.filter((user) => {
      if (user.type === userType) {
        return user;
      }
    });
    res.status(200).send(types);
  } catch (e: any) {
    switch (e.message) {
      case 'Tipo de usuário não existe ou não encontrado':
        res.statusCode = 404;
        break;
      default:
        res.statusCode = 500;
    }
  }
});

//a) Passei os parâmetros usando query. Fiz dessa forma porque assim não preciso modificar nada na array;
//b) Acredito que a melhor escolha para isso serio o trycatch. Fazendo com que o que não for igual aos types não seja retornado.