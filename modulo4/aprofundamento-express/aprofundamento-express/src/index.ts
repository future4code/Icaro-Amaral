import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

const serverPort = 3001;

app.listen(serverPort, () => {
  console.log(`O servidor é http://localhost:${serverPort}`);
});

//Exercício 1
app.get('/ping', (req, res) => {
  res.status(200).send('Pong!');
});

//Exercício 2
type Execute = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

//Exercício 3
const execute: Execute[] = [
  {
    userId: 1,
    id: 1,
    title: 'arraydeafazeres1',
    completed: true,
  },
  {
    userId: 2,
    id: 2,
    title: 'arraydeafazeres2',
    completed: false,
  },
  {
    userId: 3,
    id: 3,
    title: 'arraydeafazeres3',
    completed: true,
  },
  {
    userId: 4,
    id: 4,
    title: 'arraydeafazeres4',
    completed: false,
  },
];

//Exercício 4
app.get('/list', (req: Request, res: Response) => {
  res.status(200).send(
    execute.filter((complete) => {
      if (complete.completed) {
        return complete;
      }
    })
  );
});

//Exercício 5
app.post('/list', (req: Request, res: Response) => {
  const addUserId = req.body.userId;
  const addId = req.body.id;
  const addTitle = req.body.title;
  const addComplete = req.body.completed;
  execute.push({
    userId: addUserId,
    id: addId,
    title: addTitle,
    completed: addComplete,
  });

  res.status(200).send(execute);
});

//Exercício 6
app.put('/list/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (!id) {
    return res
      .status(400)
      .send('ID não encontrado, por favor digite um ID válido');
  }

  execute.map((change) => {
    if (change.id === id) {
      return (change.completed = !change.completed);
    }
  });
  res.status(200).send(
    execute.filter((item) => {
      if (item.id === id) {
        return item;
      }
    })
  );
});

//Exercício 7
app.delete('/list/:id', (req: Request, res: Response) => {
  const paramId = Number(req.params.id);

  if (!paramId) {
    return res
      .status(400)
      .send('ID não encontrado, por favor digite um ID válido');
  }

  res.status(200).send(
    execute.filter((id) => {
      if (id.id !== paramId) {
        return execute;
      }
    })
  );
});