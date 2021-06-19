FROM node:14.14.0-alpine3.12
RUN mkdir -p /usr/src/server
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/db

COPY ./server ./usr/src/server

COPY ./client ./usr/src/client

WORKDIR /usr/src/server

COPY ./server/package.json ./

RUN npm install

EXPOSE 8600

CMD ["npm", "start"]

