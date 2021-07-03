ARG ALPINE_VERSION=12.13

FROM node:${ALPINE_VERSION}-alpine as production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

CMD ["node", "index.js"]
