FROM node:18-alpine
WORKDIR /app
RUN npm i    mongodb
RUN npm i    express
CMD [ "node", "index.js" ]
# CMD "node index.js"