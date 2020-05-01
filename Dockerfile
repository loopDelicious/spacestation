FROM node:alpine

WORKDIR /app

ENV NODE_ENV="production"

COPY package.json package-lock.jso[n] /app/

RUN \
  npm install --production && \
  adduser -S nodejs && \
  chown -R nodejs /app && \
  chown -R nodejs /home/nodejs

COPY . /app/

USER nodejs

CMD ["node", "index.js"]