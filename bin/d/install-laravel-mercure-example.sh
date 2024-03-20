#!/bin/bash


mkdir -p vendor_local/pictus
cp -r viktor/bin/d/data/laravel-livereaction/ vendor_local/pictus/
composer config repositories.pictus-laravel-mercure-example '{"type": "path", "url": "vendor_local/pictus/laravel-livereaction", "options": {"symlink": true}}'
composer require pictus/laravel-livereaction @dev
php artisan cache:clear