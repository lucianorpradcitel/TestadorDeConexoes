"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ConnectionController_1 = require("../controllers/ConnectionController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /testar-conexoes:
 *   post:
 *     summary: Testa múltiplas conexões MySQL, basta passar uma coleção de dados de conexão que a consulta retornará "Access Denied" para bancos que estão "online" e "Can't Connect" para inacessíveis
 *     tags: [Conexões]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 ip:
 *                   type: string
 *                   example: "EMPRESA-001.DDNS.NET"
 *                 porta:
 *                   type: string
 *                   example: "12345"
 *                 cnpj:
 *                   type: string
 *                   example: "000000023000100"
 *                 razao:
 *                   type: string
 *                   example: "Citel Software S.A"
 *     responses:
 *       200:
 *         description: Lista de resultados de conexão
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ip:
 *                     type: string
 *                   porta:
 *                     type: string
 *                   cnpj:
 *                     type: string
 *                   razao:
 *                     type: string
 *                   resultado:
 *                     type: string
 *                     example: "Conexao feita com Sucesso"
 *       500:
 *         description: Erro interno no servidor
 */
router.post('/testar-conexoes', async (req, res) => {
    await ConnectionController_1.TesteConexaoController.testarConexoes(req, res);
});
exports.default = router;
//# sourceMappingURL=testeConexaoRoutes.js.map