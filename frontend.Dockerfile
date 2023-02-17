FROM node:14.17.3

WORKDIR /frontend

COPY ./frontend .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
