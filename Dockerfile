FROM node

RUN apt-get update && apt-get upgrade -y \
    && apt-get clean

RUN mkdir /app
WORKDIR /app

COPY package.json /app/
RUN npm install --only=production

COPY src /app/src

EXPOSE 3000

CMD [ "npm", "start" ]

