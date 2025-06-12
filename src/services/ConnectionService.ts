import InfoConexao from "../models/InfoConexao";

const mysql = require('mysql2/promise');
import ResultadoConexao from '../models/ResultadoConexao';

class TesteConexaoService {
    static async testarConexao(InfoConexao: InfoConexao) {
        try {
            const conn = await mysql.createConnection({
                host: InfoConexao.ip,
                port: parseInt(InfoConexao.porta),
                user: 'teste',
                password: '123',
                connectTimeout: 5000
            });
            await conn.end();

            const resultado = "Conexão feita com sucesso";

            return new ResultadoConexao(
                InfoConexao.ip,
                InfoConexao.porta,
                InfoConexao.cnpj,
                InfoConexao.razao,
                resultado
            );

        } catch (err: any) {
            let resultado;

            if (err.message.includes('denied')) {
                resultado = "Conexão Funcionando";
            } else if (err.code === 'ETIMEDOUT') {
                resultado = "Sem Conexão";
            } else if (err.code === 'ENOTFOUND') {
                resultado = "Host não encontrado";
            } else if (err.code === 'ECONNREFUSED') {
                resultado = "Conexão recusada pelo host";
            } else {
                resultado = err.message || "Erro inesperado";
            }

            return new ResultadoConexao(
                InfoConexao.ip,
                InfoConexao.porta,
                InfoConexao.cnpj,
                InfoConexao.razao,
                resultado
            );
        }
    }
}

export default TesteConexaoService;








