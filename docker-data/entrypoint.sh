#!/bin/bash

# nohup php /app/artisan queue:work --tries=3 >> worker.out & 

echo "--starting supervisor--"
# service supervisor start
cd ..
/usr/bin/supervisord -c /etc/supervisor/conf.d/viktor.conf
cd /app 
echo "--starting supervisor--"

# run frankenphp entrypoint
exec docker-php-entrypoint "$@"