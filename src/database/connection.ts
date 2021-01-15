import { createConnection } from 'typeorm';

createConnection().then(() => console.log('DB connected!')).catch(err => console.log(err));