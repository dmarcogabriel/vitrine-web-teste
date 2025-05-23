FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock .

RUN yarn

COPY . /app

CMD ["sh", "-c", "yarn build && yarn start"]
