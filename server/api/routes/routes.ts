import { Application } from 'express';

class Routes {
    constructor(app: Application) {
        this.getRoutes(app);
    }

    getRoutes(app: Application): void {
        app.get('/', (req, res) => res.json('Hello Word'))
    }
};

export default Routes;