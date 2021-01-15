import User from '../../database/models/User';

import { IUser, createUsers, IPostUser, createUser, IPutUser } from './interface';

class UserService {
    constructor() { }

    async index(): Promise<IUser[]> {
        return User.find().then(createUsers);
    }

    async create(user: IPostUser) {
        // if(user.name == "Liam") {
        //     throw new Error('Name already in use')
        // }
        const newUser = User.create(user);
        return await User.save(newUser);
    }

    async findOne(id: number): Promise<IUser> {
        return User.findOne({ where: { id } }).then(createUser);
    }

    async update(id: number, user: IPutUser): Promise<IUser> {
        return User.createQueryBuilder().update().set(user).where({ id }).execute().then(createUser);
    }

    async destroy(id: number): Promise<IUser> {
        return User.createQueryBuilder().delete().where({ id }).execute().then(createUser);
    }
};

export default UserService;