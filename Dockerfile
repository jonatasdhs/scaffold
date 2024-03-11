FROM node:21-alpine3.18

RUN mkdir -p /src/app

WORKDIR /src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npx ts-node src/app.ts