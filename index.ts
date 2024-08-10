import 'dotenv/config';
import express from 'express';
import { initialize } from 'express-openapi';
import { setupDb } from './db';
import * as operations from './api/controllers';
import { basicScheme } from './api/helpers/security';
import { errorHandler } from './api/helpers/errorHandler';

setupDb();
const app = express();
initialize({
  app,
  apiDoc: './api/schema.yaml',
  operations,
  securityHandlers: {
    // @ts-expect-error extra properties to our Request type
    basicScheme,
  },
  errorMiddleware: errorHandler,
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;