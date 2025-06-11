const infoConexao = require('../models/InfoConexao');
const TesteConexaoService = require('../services/ConnectionService');
const InfoConexao = require('../models/InfoConexao.js');



class TesteConexaoController{
    static async testarConexoes(req, res)
    {
        try
        {
            const conexoes = req.body;
            const testes = conexoes.map(conn => {
                const info = new InfoConexao(conn.ip, conn.porta, conn.cnpj, conn.razao);
                return TesteConexaoService.testarConexao(info);
                console.log(res)
            });
        const resultados = await Promise.all(testes);
        return res.json(resultados);
        }
        catch (error)
        {
            return res.status(500).json({erro: error.message});
        }
         
} 

}


module.exports = TesteConexaoController;