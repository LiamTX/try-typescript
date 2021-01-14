import http from 'http';
import Api from './api/api';

const server = http.createServer(Api);

const port = 3333 || process.env.PORT;
server.listen(port, () => console.log(`Server running in http://localhost:${port}`));