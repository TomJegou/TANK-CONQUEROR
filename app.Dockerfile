FROM node:gallium-alpine3.17
WORKDIR /app
COPY ./app/package.json ./
RUN npm ci
COPY ./app ./
CMD [ "node src/main.js" ]