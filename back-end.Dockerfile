FROM node:gallium-alpine3.17
WORKDIR /app
COPY ./back-end/package.json ./
RUN npm ci
COPY ./back-end ./
CMD [ "node src/main.js" ]