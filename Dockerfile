# Use a imagem oficial do Node.js como base
FROM node:18-alpine

# Instale as dependências necessárias para o Prisma
RUN apk add --no-cache openssl

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Gere o cliente Prisma
RUN npx prisma generate

# Exponha a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]