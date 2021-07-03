ARG ALPINE_VERSION=12.13

FROM arm64v8/node:${ALPINE_VERSION}-alpine as production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]
