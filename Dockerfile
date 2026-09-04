###############################################
# Estágio 1: build (compila o TypeScript)
###############################################
FROM node:22-alpine AS build

WORKDIR /app

# Instala todas as dependências (inclusive as de dev, necessárias para o tsc)
COPY package.json package-lock.json ./
RUN npm ci

# Compila src/ -> dist/
COPY tsconfig.json ./
COPY src ./src
RUN npm run build


###############################################
# Estágio 2: produção (apenas o necessário)
###############################################
FROM node:22-alpine AS production

ENV NODE_ENV=production

WORKDIR /app

# Somente dependências de runtime
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Código compilado
COPY --from=build /app/dist ./dist

# O swaggerConfig lê os comentários @swagger diretamente dos fontes
# (apis: ['./src/routes/testeConexaoRoutes.ts']), então as rotas em .ts
# precisam existir em runtime para o /api-docs não ficar vazio.
COPY --from=build /app/src/routes ./src/routes

# Roda como usuário sem privilégios (a imagem node já traz o usuário "node")
USER node

EXPOSE 3000

# Considera saudável qualquer resposta HTTP do servidor (o Express responde
# 404 em "/", o que já prova que o processo está aceitando conexões).
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:3000/api-docs/',r=>process.exit(r.statusCode<500?0:1)).on('error',()=>process.exit(1))"

CMD ["node", "dist/app.js"]
