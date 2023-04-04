FROM node:gallium-alpine3.17
WORKDIR /app
COPY ./front-end/package.json ./
RUN npm ci
COPY ./front-end ./
CMD [ "node main.js" ]