"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerJSDoc = require('swagger-jsdoc');
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Testador de Conexões',
            version: '1.0.0',
            description: 'Testa conexões com hosts remotos via MySQL',
        },
    },
    apis: ['./src/routes/testeConexaoRoutes.ts'],
};
const swaggerSpec = swaggerJSDoc(options);
exports.default = swaggerSpec;
//# sourceMappingURL=swaggerConfig.js.map