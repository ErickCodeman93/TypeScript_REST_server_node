"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../../routes/users"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../../db/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            user: '/api/users'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        //Middlewares
        this.middlewares();
        //Definir mis rutas
        this.routes();
    } // end constructor
    middlewares() {
        //CORS 
        this.app.use(cors_1.default());
        //Lectura del body
        this.app.use(express_1.default.json());
        //Carpeta publica
        this.app.use(express_1.default.static('public'));
    } //end method
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('DataBase Online');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    } //end method
    routes() {
        this.app.use(this.apiPaths.user, users_1.default);
    } // end method
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor en puerto ${this.port}`);
        });
    } // end method
} // end class
exports.default = Server;
//# sourceMappingURL=Server.js.map