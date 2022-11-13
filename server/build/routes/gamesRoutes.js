"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Devuelve un objeto que guarda las rutas
const express_1 = require("express");
const gamesController_1 = require("../controllers/gamesController");
// Definir enrutador
class GamesRoutes {
    // construc
    constructor() {
        // prop
        this.router = (0, express_1.Router)();
        this.config();
    }
    // Methods
    config() {
        // Definir rutas
        this.router.get('/', gamesController_1.gamesController.list); // --> Ruta Inicial // ahora para listar los juegos
        this.router.get('/:id', gamesController_1.gamesController.getOne); // --> Para elegir un solo juego
        this.router.post('/', gamesController_1.gamesController.create); //--> para crear juegos a agregar 
        this.router.delete('/:id', gamesController_1.gamesController.delete); // --> Para eliminar un dato
        this.router.put('/:id', gamesController_1.gamesController.update); // --> Actualizar un juego
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
