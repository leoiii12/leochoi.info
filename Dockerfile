FROM node:10-alpine as sdk

WORKDIR /home/leochoi/

RUN npm install -g gulp
RUN npm install -g bower

COPY ./ ./
RUN npm install
RUN bower install --allow-root

RUN gulp build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=sdk /home/leochoi/www /usr/share/nginx/html