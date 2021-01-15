import { Router } from 'express';
import UserRoutes from '../../modules/User/routes';

class Routes {
    private userRoutes: UserRoutes

    constructor(router: Router) {
        this.userRoutes = new UserRoutes();
        this.getUserRoutes(router);
    }

    getUserRoutes(router: Router): void {
        router.get('/api/users', this.userRoutes.index);
        router.post('/api/users', this.userRoutes.create);
        router.get('/api/users/:id', this.userRoutes.findOne);
        router.put('/api/users/:id', this.userRoutes.update);
        router.delete('/api/users/:id', this.userRoutes.destroy);
    }
};

export default Routes;