import express from 'express';
import cors from 'cors';
import router from './api/http/routes';

import dotenv from 'dotenv';
import {handleError} from './api/middlewares/errorHandler.middleware';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', router);

app.use(handleError);

export default app;
