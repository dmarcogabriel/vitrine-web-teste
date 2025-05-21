import app from './app';
import {env} from 'node:process';
import mongoDb from '@app/infra/database/mongo';

(async () => {
  await mongoDb.connect();
  await mongoDb.seeds();

  app.listen(env.PORT ?? 4000, () => {
    console.log('Server On');
  });
})();
