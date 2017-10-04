FROM nginx:alpine
MAINTAINER Naoto Yamaguchi "contact@naotoyamaguchi.com"

COPY nginx.conf /etc/nginx/nginx.conf

COPY dist /var/www

WORKDIR /var/www/