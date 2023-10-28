FROM node:alpine

RUN mkdir -p /usr/src/triagilapp
WORKDIR /usr/src/triagilapp

RUN apk update && apk upgrade
RUN apk add git
RUN apk add bash

RUN rm -rf ./node_modules
RUN rm -rf package-lock.json

COPY ./package.json .
RUN npm install

COPY . .

EXPOSE 3003

CMD npm run build && npm run start
