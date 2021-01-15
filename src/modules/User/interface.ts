export interface IUser {
    readonly id: number,
    name: string,
    email: string,
    password: string
};

export interface IUserDetails {
    id: number,
    name: string,
    email: string,
    password: string
}

export interface IPostUser {
    name: string,
    email: string,
    password: string
}

export interface IPutUser {
    name?: string,
    email?: string,
    password?: string
}

export function createUser({ id, name, email, password }: any): IUser {
    return {
        id,
        name,
        email,
        password
    }
};

export function createUsers(data: any[]): IUser[] {
    return data.map(createUser)
}