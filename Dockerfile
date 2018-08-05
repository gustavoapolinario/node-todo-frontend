# Preparing bower files (only have bower in dev dependencies)
FROM node

RUN mkdir /app
WORKDIR /app

COPY package.json /app/
RUN npm install

COPY .bowerrc /app/
COPY bower.json /app/
RUN npm run bowerInstallDocker


FROM node

MAINTAINER Gustavo Apolinario <gustavo.guss@gmail.com>

RUN apt-get update && apt-get upgrade -y \
    && apt-get clean

RUN mkdir /app
WORKDIR /app

COPY --from=0 /app/src/public/static/bower_components/ /app/src/public/static/bower_components/

COPY package.json /app/
RUN npm install
# --only=production

COPY src /app/src

EXPOSE 3000

CMD [ "npm", "start" ]

RUN ls -lah /app/src/public/static/bower_components/
