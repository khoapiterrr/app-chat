FROM node:14.14.0-alpine3.12
RUN mkdir -p /usr/src/server

COPY . ./usr/src/server

WORKDIR /usr/src/server

COPY package.json ./

RUN npm install

EXPOSE 8600

CMD ["npm", "start"]
