import dotenv from 'dotenv'
import Server from './models/server/Server';

//Configurar .env
dotenv.config();

//Run server
const server = new Server();

server.listen();
