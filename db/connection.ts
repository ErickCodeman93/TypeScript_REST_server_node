import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

dotenv.config();

const database = process.env.DATABASE || '';
const user = process.env.USER_DB || '';
const password = process.env.PASS_DB || '';
const hostDB = process.env.HOST_DB || '';

const db = new Sequelize( database , user, password,{
	host:hostDB,
	dialect : 'mysql',
	// logging: false
} );

export default db;