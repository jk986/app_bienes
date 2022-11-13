"use strict";
// *************Esta clase inicia el servidor*******
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
class Server {
    // Cosntructor
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    // Métodos
    config() {
        // Si ya existe un puerto en el sistema lo toma, sino usa el 3000
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev')); // --> para ver las peticiones en consola
        this.app.use((0, cors_1.default)()); // --> Angular empiezaa pedir los datos a nuestro servidor 
        this.app.use(express_1.default.json()); // --> Aceptar formatos json de clientes
        this.app.use(express_1.default.urlencoded({ extended: false })); // --> cuando nosotros queremos enviar desde un formulario html
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/props', gamesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port: ' + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
