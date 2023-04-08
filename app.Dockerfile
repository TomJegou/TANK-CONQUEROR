FROM node:gallium-alpine3.17
WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install --production
COPY . .
CMD [ "node", "src/main.js" ]