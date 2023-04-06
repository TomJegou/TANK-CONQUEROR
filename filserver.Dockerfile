FROM node:gallium-alpine3.17
WORKDIR /app
COPY ./fileserver/package.json ./
RUN npm ci
COPY ./filserver ./
CMD [ "node main.js" ]