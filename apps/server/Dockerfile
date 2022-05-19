FROM node:14-alpine as common

# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
EXPOSE 8080

FROM common as production
ENV NODE_ENV=production
RUN npm ci
COPY . .
CMD ["npm", "run", "start"]

FROM common as dev
ENV NODE_ENV=development
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]