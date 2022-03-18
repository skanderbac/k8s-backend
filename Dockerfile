FROM node
WORKDIR /app/backend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3010
CMD [ "npm", "start" ]
