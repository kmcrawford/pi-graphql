FROM node:alpine3.15
RUN apk update
RUN apk add --no-cache ca-certificates 
ENV NODE_ENV=production
COPY src ./src
COPY package.json ./package.json
COPY node_modules ./node_modules
ENTRYPOINT ["node", "src/index"]