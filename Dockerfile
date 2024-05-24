# Dockerfile para a aplicação Next.js
FROM node:18

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando os arquivos de configuração do npm
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o restante dos arquivos da aplicação
COPY . .

# Expondo a porta da aplicação
EXPOSE 3000

# Comando para iniciar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "dev"]
