"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesController = void 0;
// traer la base de datos 
const databse_1 = __importDefault(require("../databse"));
class GamesController {
    // param
    // constr
    // methods
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield databse_1.default.query('SELECT * FROM propiedad');
            res.json(games);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield databse_1.default.query('SELECT * FROM propiedad WHERE id_p = ?', [id]);
            if (games.length > 0)
                return res.json(games[0]); // Con esto recupero un objeto y no el array completo
            res.status(404).json({ text: 'the propertie no exist' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body); // tendra los valores que nos estan enviando las apolicaciones cliente
            yield databse_1.default.query('INSERT INTO propiedad set ?', [req.body]);
            res.json({ message: 'Propiedad Guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // Destructuring
            yield databse_1.default.query('DELETE FROM propiedad WHERE id_p = ?', [id]);
            res.json({ message: 'The game was deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield databse_1.default.query('UPDATE propiedad set ? WHERE id_p = ?', [req.body, id]);
            res.json({ message: 'the game was updated' });
        });
    }
}
exports.gamesController = new GamesController();
