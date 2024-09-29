import express, { Request, Response } from 'express';
import ReviewRoutes from './public/src/routes/ReviewRoutes';

const app = express();
const port = 3000;


app.use(express.json());

app.use('/api', ReviewRoutes);


app.get('/', (req:Request, res: Response) => {
  res.send('Hello, world!');
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});