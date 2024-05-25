# Dockerfile para a aplicação Next.js
FROM node:20-alpine3.18 as builder

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando os arquivos de configuração do npm
COPY package*.json ./

# Instalando as dependências
RUN npm install --production

# Copiando o restante dos arquivos da aplicação
COPY . .

# Build the Next.js application
RUN npm run build

# Expondo a porta da aplicação
EXPOSE 3000

# Comando para iniciar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "start"]
