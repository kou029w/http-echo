FROM node:alpine
WORKDIR /app
ADD package.json ./
RUN npm install
ADD app.ts main.ts ./
CMD ["node", "--run=start"]
