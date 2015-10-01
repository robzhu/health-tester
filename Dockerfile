FROM node:4.1.1-slim

EXPOSE 80

RUN mkdir ~/app
ADD . ~/app
WORKDIR ~/app

RUN npm install

ENTRYPOINT ["node", "main.js"]