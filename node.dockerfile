FROM node:latest

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm i -g pm2

COPY ./api/package.json /usr/src/app/package.json

RUN npm install

EXPOSE 3000

CMD [ "pm2-dev", "start", "ecosystem.config.js" ]