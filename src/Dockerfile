FROM node:12-alpine
RUN apk add --update --no-cache \
    curl \
    git \
    vim
USER node
RUN mkdir -p /home/node/app/node_modules 
RUN chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
COPY --chown=node:node . .
RUN npm install
EXPOSE 8000
