import {Request,Response} from 'express';

// traer la base de datos 
import pool from '../databse'

class GamesController {
    // param

    // constr

    // methods
    public async list (req:Request,res:Response){
        const games = await pool.query('SELECT * FROM propiedad');
        res.json(games);
    }

    public async getOne(req:Request,res:Response) : Promise<any>{
        const {id} = req.params;
        const games = await pool.query('SELECT * FROM propiedad WHERE id_p = ?',[id]);
        if(games.length>0) return res.json(games[0]);// Con esto recupero un objeto y no el array completo
        res.status(404).json({text: 'the propertie no exist'});
    }

    public async create (req:Request,res:Response) : Promise<void> {
        //console.log(req.body); // tendra los valores que nos estan enviando las apolicaciones cliente
        await pool.query('INSERT INTO propiedad set ?', [req.body] );
        res.json({message:'Propiedad Guardada'});
    }

    public async delete(req:Request,res:Response) : Promise<void>{
        const {id} = req.params; // Destructuring
        await pool.query('DELETE FROM propiedad WHERE id_p = ?',[id]);
        res.json({message:'The game was deleted'});
    }

    public async update(req:Request,res:Response) : Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE propiedad set ? WHERE id_p = ?',[req.body,id]);
        res.json({message:'the game was updated'});
    }
}

export const gamesController = new GamesController();