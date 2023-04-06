FROM node:gallium-alpine3.17
WORKDIR /app
COPY ./fileserver/package.json ./
COPY ./fileserver/package-lock.json ./
RUN npm install --production
COPY ./fileserver ./
CMD [ "node", "main.js" ]