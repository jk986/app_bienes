"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Devuelve un objeto que guarda las rutas
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
// Definir enrutador
class IndexRoutes {
    // construc
    constructor() {
        // prop
        this.router = (0, express_1.Router)();
        this.config();
    }
    // Methods
    config() {
        // Definir rutas
        this.router.get('/', indexController_1.indexController.index); // --> Ruta Inicial
    }
}
const rutas = new IndexRoutes();
exports.default = rutas.router;
