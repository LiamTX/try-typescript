import { Request, Response } from 'express';
import UserService from './service';

import { onError, onSuccess } from '../../api/responses';

class UserController {
    private userService: UserService

    constructor() {
        this.userService = new UserService();
    }

    async index(req: Request, res: Response) {
        this.userService.index()
            .then(data => {
                onSuccess(res, data)
            })
            .catch(err => {
                onError(res, 'Erro ao buscar os usuarios', err)
            });
    }

    async create(req: Request, res: Response) {
        const { name, email, password } = req.body;

        this.userService.create({ name, email, password })
            .then(data => {
                onSuccess(res, data)
            })
            .catch(err => {
                onError(res, 'Erro ao cadastrar usuario', err)
            })
    }

    findOne(req: Request, res: Response) {
        const id = parseInt(req.params.id);

        this.userService.findOne(id)
            .then(data => {
                onSuccess(res, data)
            })
            .catch(err => {
                onError(res, 'Erro ao achar usuario', err)
            })
    }

    update(req: Request, res: Response) {
        const id = parseInt(req.params.id);

        const { name, email, password } = req.body;

        this.userService.update(id, { name, email, password })
            .then(data => {
                onSuccess(res, data)
            })
            .catch(err => {
                onError(res, 'Erro ao atualizar usuario', err)
            })
    }

    destroy(req: Request, res: Response) {
        const id = parseInt(req.params.id);

        this.userService.destroy(id)
            .then(data => {
                onSuccess(res, data)
            })
            .catch(err => {
                onError(res, 'Erro ao deletar usuario', err)
            })
    }
};

export default UserController;