// Devuelve un objeto que guarda las rutas
import { Router } from 'express'

import {gamesController} from '../controllers/gamesController'

// Definir enrutador
class GamesRoutes{
    // prop
    public router:Router = Router();
    // construc
    constructor(){
        this.config();
    }
    // Methods
    config():void{ // --> Utiliza +router y definir rutas
        // Definir rutas
        this.router.get('/',gamesController.list); // --> Ruta Inicial // ahora para listar los juegos
        this.router.get('/:id',gamesController.getOne); // --> Para elegir un solo juego
        this.router.post('/',gamesController.create); //--> para crear juegos a agregar 
        this.router.delete('/:id',gamesController.delete);// --> Para eliminar un dato
        this.router.put('/:id',gamesController.update);// --> Actualizar un juego
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;