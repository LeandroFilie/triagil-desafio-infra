import { AddressInfo } from 'net';

import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { teamRouter } from './routes/TeamRouter';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', teamRouter);

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server running at http://localhost:${address.port}`);
  } else {
    console.error('Failure initializing server.');
  }
});
