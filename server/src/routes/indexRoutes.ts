// Devuelve un objeto que guarda las rutas
import { Router } from 'express'

import { indexController } from '../controllers/indexController';

// Definir enrutador
class IndexRoutes{
    // prop
    public router:Router = Router();
    // construc
    constructor(){
        this.config();
    }
    // Methods
    config():void{ // --> Utiliza +router y definir rutas
        // Definir rutas
        this.router.get('/',indexController.index); // --> Ruta Inicial
    }
}

const rutas = new IndexRoutes();
export default rutas.router;
