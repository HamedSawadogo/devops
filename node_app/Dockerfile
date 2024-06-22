FROM node:alpine3.10

WORKDIR /app/

COPY . /app/

RUN npm init -y

RUN npm install


EXPOSE 3000

RUN ["npm run","start"]
