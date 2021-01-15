import express from 'express';
import Routes from './routes/routes';

class Api {
    public express: express.Application

    constructor() {
        this.express = express();
        this.middlewares();
    }

    middlewares(): void {
        this.express.use(express.json());
        this.router(this.express);
    }

    private router(router: express.Router): void {
        new Routes(router);
    }
};

export default new Api().express;