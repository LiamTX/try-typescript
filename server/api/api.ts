import express from 'express';
import morgan from 'morgan';
import Routes from './routes/routes';
import { errorHandlerApi } from './error-handler-api';

class Api {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middlewares();
    }

    middlewares(): void {
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(errorHandlerApi);
        this.router(this.express);
    }

    private router(app: express.Application): void {
        new Routes(app);
    }
};

export default new Api().express;