import bcrypt from 'bcrypt';

export function encrypt(data: string): string {
    return bcrypt.hashSync(data, 10);
}