// *************Esta clase inicia el servidor*******

import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

class Server {

    // Propiedades
    public app:Application;    
    // Cosntructor
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }
    
    // Métodos
    config():void{ // --> Para configurar la propiedad  +app
        // Si ya existe un puerto en el sistema lo toma, sino usa el 3000
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev')); // --> para ver las peticiones en consola
        this.app.use(cors()); // --> Angular empiezaa pedir los datos a nuestro servidor 
        this.app.use(express.json()); // --> Aceptar formatos json de clientes
        this.app.use(express.urlencoded({extended:false})); // --> cuando nosotros queremos enviar desde un formulario html
    }

    routes():void{ // --> Para definir las rutas del servidor
        this.app.use('/',indexRoutes);
        this.app.use('/api/props',gamesRoutes);
    }

    start():void{ // --> Para inicializar el servidor
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port: '+ this.app.get('port'));
        });
    }
    
    
}

const server = new Server ();
server.start(); 