import { Request, Response } from "express";
import User from '../models/dataBase/Usuario';

export const getUsers = async ( req: Request, res: Response ) => {

	const users = await User.findAll();

	res.json({
		users
	});

} // end functions

export const getUser = async ( req: Request, res: Response ) => {

	const { id } = req.params;

	const user = await User.findByPk( id );

	if( user )
		res.json({
			user
		});
	else
		res.status( 400 ).json({
			msg: `El id ${ id } no existe en la base de datos`
		});

} // end functions

export const postUser = async ( req: Request, res: Response ) => {

	const { body } = req;

	try {

		const existEmail = await User.findOne({
			where : {
				email: body.email
			}
		});

		if(  existEmail )
			return res.status( 400 )
					.json({
						msg : `Ya existe el email ${ body.email } en la base de datos`
					});

		const user = await User.create( body );

		res.json({
			user
		});
		
	} // end try
	catch (error) {
		
		console.log( error );
		
		res.status( 500 ).json({
			msg:'Error',
		})

	} // end catch


} // end functions

export const putUser = async ( req: Request, res: Response ) => {

	const { id } = req.params;

	const { body } = req;

	try {

		const user = await User.findByPk( id );

		if( ! user )
			return res.status( 404 ).json({
				msg: `El id ${ id } no existe en la base de datos`
			});

		await user.update( body );

		res.json({
			user
		});
		
	} // end try
	catch (error) {
		
		console.log( error );
		
		res.status( 500 ).json({
			msg:'Error',
		})

	} // end catch

} // end functions

export const deleteUser = async ( req: Request, res: Response ) => {

	const { id } = req.params;
	
	try {

		const user = await User.findByPk( id );

		if( ! user )
			return res.status( 404 ).json({
				msg: `El id ${ id } no existe en la base de datos`
			});

	
		await user.update( { state : 0 } );

		res.json({
			user
		});
		
	} // end try
	catch (error) {
		
		console.log( error );
		
		res.status( 500 ).json({
			msg:'Error',
		})

	} // end catch

} // end functions