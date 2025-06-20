FROM node:20.11.1-alpine3.18

WORKDIR /app

COPY package.json /app
RUN npm install

CMD [ "npm", "run", "dev" ]