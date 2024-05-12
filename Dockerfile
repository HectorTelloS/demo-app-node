FROM node:18.20-alpine3.19

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

EXPOSE 3000

CMD [ "node", "app.js" ]