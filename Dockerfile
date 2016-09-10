FROM node:latest

RUN \
  apt-get update && \
  apt-get install -y ruby ruby-dev && \
  rm -rf /var/lib/apt/lists/*

WORKDIR /home/app
ADD . /home/app

RUN npm update npm
RUN npm install 

CMD ./node_modules/gulp/bin/gulp.js serve
