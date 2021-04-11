FROM node:14.16.0-alpine3.12

WORKDIR /app

COPY ["package.json", "package-lock.json*", "yarn.lock", "./"]

RUN yarn install --production

EXPOSE 3000

COPY . .

CMD ["yarn","start"]