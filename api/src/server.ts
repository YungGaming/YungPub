import 'colors';

import * as express from 'express';
import * as BodyParser from 'body-parser';
import { join } from 'path';

import { env, port, testing, sessionSecret as secret, mongoUrl, cwd } from './config';
import { InitRoutes } from './router';
import { Configure } from './service/route.service';

const app = express();

const uploadDir = join(cwd, 'upload');
app.use('/upload', express.static(uploadDir));

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

Configure(app);
InitRoutes(app);

if (!testing) {
    app.listen(port);
    console.log(`\n[ENV]\t\t ${env}`.green.bold);
    console.log(`[PORT]\t\t ${port}`.green.bold);
    console.log(`[STARTED]\t`.green.bold, `YungPub API`, `\n`);
}

export { app };
