FROM node:14.16.0-alpine3.12

COPY . ./client

WORKDIR /client

COPY package.json ./

COPY yarn.lock ./


RUN npm install -g serve

RUN npm install

RUN yarn build

EXPOSE 8686

CMD ["serve", "-s", "build", "-l", "8686"]