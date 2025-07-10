"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TesteConexaoController = void 0;
const InfoConexao_1 = __importDefault(require("../models/InfoConexao"));
const ConnectionService_1 = __importDefault(require("../services/ConnectionService"));
class TesteConexaoController {
    static async testarConexoes(req, res) {
        try {
            const conexoes = req.body;
            const testes = conexoes.map((conn) => {
                const info = new InfoConexao_1.default(conn.ip, conn.porta, conn.cnpj, conn.razao);
                return ConnectionService_1.default.testarConexao(info);
            });
            const resultados = await Promise.all(testes);
            return res.json(resultados);
        }
        catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }
}
exports.TesteConexaoController = TesteConexaoController;
//# sourceMappingURL=ConnectionController.js.map