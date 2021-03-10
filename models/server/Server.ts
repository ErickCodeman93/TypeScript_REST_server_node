import express, { Application } from 'express';
import userRoutes from '../../routes/users';
import cors from 'cors'
import db from '../../db/connection';

class Server {

	private app: Application;
	private port: string;
	private apiPaths = {
		user:'/api/users'
	}

	constructor() {

		this.app = express();
		this.port = process.env.PORT || '8000';

		this.dbConnection();
		
		//Middlewares
		this.middlewares();

		//Definir mis rutas
		this.routes();

	} // end constructor

	middlewares() {

		//CORS 
		this.app.use( cors() );

		//Lectura del body
		this.app.use( express.json() );

		//Carpeta publica
		this.app.use( express.static( 'public' ) );

	} //end method

	async dbConnection(){

		try {
			
			await db.authenticate();
			console.log( 'DataBase Online' );
			

		} catch ( error ) {
			throw new Error( error );
		}
	} //end method

	routes() {

		this.app.use( this.apiPaths.user, userRoutes );
	} // end method

	listen() {

		this.app.listen( this.port, () => {
			console.log( `Servidor en puerto ${ this.port }` );
		});
	} // end method

} // end class

export default Server;