import {Request,Response} from 'express';

class IndexController {
    // param

    // constr

    // methods
    public index (req:Request,res:Response){
        res.json({text:'API IS /api/props'});
    }
}

export const indexController = new IndexController(); // Exportacion de toda la clase