FROM nginx:1-alpine

COPY  . /var/www/tp1

COPY books.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]