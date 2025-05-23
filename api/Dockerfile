FROM node:alpine

WORKDIR /app

COPY . .

RUN yarn

CMD ["sh", "-c", "yarn build && yarn start"]
