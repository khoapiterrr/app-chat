FROM node:14.14.0-alpine3.12

COPY . ./server

WORKDIR /server

COPY package.json ./

COPY yarn.lock ./

RUN npm install

EXPOSE 8600

CMD ["npm", "start"]
