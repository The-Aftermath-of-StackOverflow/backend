FROM node:18-slim
LABEL authors="masterchief164"
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 8000
CMD ["npm", "start"]
