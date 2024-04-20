#!/bin/bash

cd ../

composer create-project --prefer-dist laravel/laravel laravel
cd laravel
cd ..
mv app/public app/public_org
cp -ra laravel/. app/
cd app

# laravel default steps
php artisan key:generate
