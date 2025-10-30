import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import configs from './configs/configs';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
import router from './routes/index';

const app: Application = express();

app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req: Request, res: Response) => {
  res.send('SERVER RUNNING ON PORT ' + configs.port);
});

// routes
app.use("/api/v1", router);

app.use(globalErrorHandler);
app.use(notFound);

export default app;