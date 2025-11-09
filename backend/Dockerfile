FROM node:18-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm i --only=production
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]
