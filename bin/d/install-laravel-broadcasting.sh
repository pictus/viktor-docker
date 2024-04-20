#!/bin/bash

# reading the key from frankenphp enviroment 
# instead of vitor/.env in some cases there is not the same key presented
mercurePublisherKey=$(frankenphp environ | grep "MERCURE_PUBLISHER_JWT_KEY=" | sed 's/^[^=]*=//')

php artisan install:broadcasting
composer require mvanduijker/laravel-mercure-broadcaster
composer require barryvdh/laravel-debugbar --dev

# setup .env
echo "" >> .env
echo "MERCURE_SECRET="$mercurePublisherKey >> .env
echo "MERCURE_URL=https://localhost:443/.well-known/mercure" >> .env

# set BROADCAST_CONNECTION to mercure
sed -i 's/^\(BROADCAST_CONNECTION=\).*/\1mercure/' .env
# set QUEUE_CONNECTION to sync
# sed -i 's/^\(QUEUE_CONNECTION=\).*/\1sync/' .env
# setup config/broadcasting.php
# 'connections' => [
#     'mercure' => [
#         'driver' => 'mercure',
#         'url' => env('MERCURE_URL', '/.well-known/mercure'),
#         'secret' => env('MERCURE_SECRET', 'aVerySecretKey'),
#     ],
# ]
sed -i "/'connections' => \[/a \\\n        'mercure' => ['driver'=>'mercure','url'=>env('MERCURE_URL', '/.well-known/mercure'),'secret' => env('MERCURE_SECRET', 'aVerySecretKey')]," config/broadcasting.php

php artisan cache:clear
php artisan optimize:clear