FROM node:14.16.0-alpine3.12

RUN mkdir -p /usr/src/app

COPY . ./usr/src/app

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install -g serve

RUN npm install

RUN yarn build

EXPOSE 8686

# CMD ["npm", "start"]

CMD ["serve", "-s", "build", "-l", "8686"]