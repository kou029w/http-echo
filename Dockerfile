FROM node:alpine
ADD package.json .
RUN npm i
ADD index.js .
CMD ["npm","start"]
