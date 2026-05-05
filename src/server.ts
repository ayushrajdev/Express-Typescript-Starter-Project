import express from 'express';
import { loadEnv } from './config/index.js';
import pingRouter from './routers/v1/ping.router.js';
import v1Router from './routers/v1/index.router.js';
import v2Router from './routers/v2/index.router.js';

const app = express();

app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

app.listen(3000, () => {
    loadEnv();
});
