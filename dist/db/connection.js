"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const database = process.env.DATABASE || '';
const user = process.env.USER_DB || '';
const password = process.env.PASS_DB || '';
const hostDB = process.env.HOST_DB || '';
const db = new sequelize_1.Sequelize(database, user, password, {
    host: hostDB,
    dialect: 'mysql',
    // logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map