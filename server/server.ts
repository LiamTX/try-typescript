import http from 'http';

const server = http.createServer();

const port = 3333 || process.env.PORT;
server.listen(port, () => console.log('Started'))