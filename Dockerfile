# Use a imagem oficial do Node.js como base
FROM node:18-alpine

# Instale as dependências necessárias para o Prisma
RUN apk add --no-cache openssl

# Instale o Stripe CLI
RUN apk add --no-cache curl && \
    curl -L https://github.com/stripe/stripe-cli/releases/download/v1.5.14/stripe_1.5.14_linux_x86_64.tar.gz | tar xz -C /usr/local/bin

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

# Comando para iniciar a aplicação e o Stripe CLI
CMD ["sh", "-c", "stripe listen --forward-to localhost:3000/api/webhooks & npm run dev"]
