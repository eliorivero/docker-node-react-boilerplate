FROM node:13.12.0-alpine

WORKDIR /usr/app/

COPY package*.json ./

RUN npm install -qy

COPY . .
COPY ./client .

RUN npm run build

COPY ./client/app/favicon ./public/
COPY ./client/public/ ./public/

COPY server/ ./

ENV PORT 8000

EXPOSE 8000

CMD ["npm", "start"]