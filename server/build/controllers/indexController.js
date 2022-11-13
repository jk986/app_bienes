"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    // param
    // constr
    // methods
    index(req, res) {
        res.json({ text: 'API IS /api/props' });
    }
}
exports.indexController = new IndexController(); // Exportacion de toda la clase
