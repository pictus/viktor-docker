## Laravel Mercure Setup

```bash
viktor laravel:setup-mercure 
```

Behind the scenes, it runs:
```bash
php artisan install:broadcasting
composer require mvanduijker/laravel-mercure-broadcaster

// Entries in `.env`:
MERCURE_URL=https://localhost:443/.well-known/mercure
MERCURE_SECRET=<secret-you-set-while-init>

// Adds `config/broadcasting.php`
'connections' => [
    ...
    'mercure' => [
        'driver' => 'mercure',
        'url' => env('MERCURE_URL', '/.well-known/mercure'),
        'secret' => env('MERCURE_SECRET', 'aVerySecretKey')
    ],
    ...
],

// Renames `routes/channels.php` to `routes/channels-bckp.php`
// Because there is an example channel that does not work with Mercure; I will investigate this later.
```