import {Request, Response} from 'express';
import InfoConexao from '../models/InfoConexao';
import ConnectionService from '../services/ConnectionService';




export class TesteConexaoController{
   static async testarConexoes(req: Request, res: Response): Promise<Response>
    {
        try
        {
            const conexoes = req.body;
            const testes = conexoes.map((conn:any) => {
                const info = new InfoConexao(conn.ip, conn.porta, conn.cnpj, conn.razao);
                return ConnectionService.testarConexao(info);
            });
        const resultados = await Promise.all(testes);
        return res.json(resultados);
        }
        catch (error:any)
        {
            return res.status(500).json({erro: error.message});
        }
         
} 
}
