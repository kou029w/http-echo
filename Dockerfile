FROM node:alpine
WORKDIR /app
ADD package.json .
RUN npm i
ADD api api
ADD index.js .
CMD ["npm","start"]
