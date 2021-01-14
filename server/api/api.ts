import express from 'express';
import morgan from 'morgan';

class Api {
    public express: express.Application;

    constructor() {
        this.express = express();
    }

    middlewares(): void {
        this.express.use(morgan('dev'));
        this.express.use(express.json());
    }
};

export default new Api().express;