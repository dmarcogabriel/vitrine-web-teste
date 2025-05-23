import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from '@app/api/http/routes';
import {handleError} from '@app/api/http/middlewares/errorHandler.middleware';
import {env} from 'node:process';
import cookieSession from 'cookie-session';

if (env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();

app.use(
  cookieSession({
    signed: false,
    secure: false,
  }),
);
app.use(express.json());
app.use(cors());

app.use('/api', router);

app.use(handleError);

export default app;
