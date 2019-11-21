FROM node:10.17-alpine

WORKDIR /usr/server-api/app

COPY package.json .

RUN yarn install --no-lockfil --silent --ignore-engines

COPY . .

RUN apk update && apk add \
  curl bash binutils gettext \
  && chmod 777 startup.sh

RUN apk --no-cache add python make g++

EXPOSE 8000


CMD ["bash", "startup.sh"]
