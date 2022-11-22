FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
COPY db ./db/

RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 5000
CMD [ "npm", "start" ]