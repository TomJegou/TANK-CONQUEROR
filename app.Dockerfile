FROM node:gallium-alpine3.17
WORKDIR /app
COPY ./app/package.json ./
COPY ./app/package-lock.json ./
RUN npm install --production
COPY ./app ./
CMD [ "node", "src/main.js" ]