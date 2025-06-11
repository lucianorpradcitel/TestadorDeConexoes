const express = require('express');
const app = express();

const testeConexaoRoutes = require('./routes/testeConexaoRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');

app.use(express.json());
app.use('/', testeConexaoRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORTA = 3000;
app.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}`));