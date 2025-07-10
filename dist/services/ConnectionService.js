"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const ResultadoConexao_1 = __importDefault(require("../models/ResultadoConexao"));
class TesteConexaoService {
    static async testarConexao(InfoConexao) {
        try {
            const conn = await promise_1.default.createConnection({
                host: InfoConexao.ip,
                port: parseInt(InfoConexao.porta),
                user: 'teste',
                password: '123',
                connectTimeout: 5000
            });
            await conn.end();
            const resultado = "Conexão feita com sucesso";
            return new ResultadoConexao_1.default(InfoConexao.ip, InfoConexao.porta, InfoConexao.cnpj, InfoConexao.razao, resultado);
        }
        catch (err) {
            let resultado;
            if (err.message.includes('denied')) {
                resultado = "Conexão Funcionando";
            }
            else if (err.code === 'ETIMEDOUT') {
                resultado = "Sem Conexão";
            }
            else if (err.code === 'ENOTFOUND') {
                resultado = "Host não encontrado";
            }
            else if (err.code === 'ECONNREFUSED') {
                resultado = "Conexão recusada pelo host";
            }
            else {
                resultado = err.message || "Erro inesperado";
            }
            return new ResultadoConexao_1.default(InfoConexao.ip, InfoConexao.porta, InfoConexao.cnpj, InfoConexao.razao, resultado);
        }
    }
}
exports.default = TesteConexaoService;
//# sourceMappingURL=ConnectionService.js.map