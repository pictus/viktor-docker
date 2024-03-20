#!/bin/bash

cd ../

composer create-project --prefer-dist laravel/laravel laravel
cd laravel
mv .env .env-laravel
cd ..
mv app/public app/public_org
cp -ra laravel/. app/
cd app
# laravel default steps
php artisan key:generate
php artisan install:broadcasting
# install mercure-broadcaster
# @todo maybe install broadcaster later 
# or make docu entry dont install
# make sure to install it in laravel-mercure-installer then
composer require mvanduijker/laravel-mercure-broadcaster

# @todo setup .env
# MERCURE_SECRET=<secret from .env>
# MERCURE_URL=https://localhost:443/.well-known/mercure

# @todo make entry to config/broadcasting.php
# maybe a bit tricky with bash, maybe use artisan command?!
# but artisan only works when plugin gets installed, there is no other way, to 
# register a command
#
# 'connections' => [
#     'mercure' => [
#         'driver' => 'mercure',
#         'url' => env('MERCURE_URL', '/.well-known/mercure'),
#         'secret' => env('MERCURE_SECRET', 'aVerySecretKey'),
#     ],
# ]
#
# install debugbar as --developer
# allow installing other composer packages configured in .env file
# allow using another directory name than victor as param
# allow using other .env file as param
# test if everything works when using a custom docker-compose file instead of the one in viktor directory
#    maybe something needs to be adjusted in Dockerfile and given per arg