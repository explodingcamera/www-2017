FROM kyma/docker-nginx

COPY nginx.conf /etc/nginx/sites-enabled/default
COPY build/ /var/www
CMD 'nginx'
