"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerConfig_1 = __importDefault(require("./swaggerConfig"));
const testeConexaoRoutes_1 = __importDefault(require("./routes/testeConexaoRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', testeConexaoRoutes_1.default);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerConfig_1.default));
const PORTA = 3000;
app.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}`));
//# sourceMappingURL=app.js.map