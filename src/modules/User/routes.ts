import { Request, Response } from 'express';
import UserController from './controller';
var userController: UserController;

class UserRoutes {
    constructor() {
        userController = new UserController();
    }

    index(req: Request, res: Response) {
        return userController.index(req, res);
    }

    create(req: Request, res: Response) {
        return userController.create(req, res);
    }

    findOne(req: Request, res: Response) {
        return userController.findOne(req, res);
    }

    update(req: Request, res: Response) {
        return userController.update(req, res);
    }

    destroy(req: Request, res: Response) {
        return userController.destroy(req, res);
    }
};

export default UserRoutes;