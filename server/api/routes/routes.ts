import { Application } from 'express';
import UserRoutes from '../../modules/User/user-routes';

class Routes {
    private userRoutes: UserRoutes;

    constructor(app: Application) {
        this.userRoutes = new UserRoutes();
        this.getUserRoutes(app);
    }

    getUserRoutes(app: Application): void {
        app.get('/api/users/all', this.userRoutes.index);
        app.post('/api/users/create', this.userRoutes.create);
        app.get('/api/users/:id/find', this.userRoutes.findOne);
        app.put('/api/users/:id/update', this.userRoutes.update);
        app.delete('/api/users/:id/destroy', this.userRoutes.destroy);
    }
};

export default Routes;