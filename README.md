Hier ist die überarbeitete README in Englisch mit Emoticons:


## Viktor 
Shortcut your containers

This is a quickstarter for [FrankenPHP](https://frankenphp.dev), but can also be used with your custom docker environment.

- 🐳 Easy Docker setup for PHP projects
- ⏰ Saves time with helpful utilities
- 📦 Based on the original [FrankenPHP](https://hub.docker.com/r/dunglas/frankenphp#!) image
- 🚀 [Mercure Hub](https://mercure.rocks/) setup included
- 🛠️ Extendable to your needs for your project
- 🧰 Simple setup, easy extension

### Installation
- Clone this repository and place it somewhere on your machine.
- Add `viktor` as an alias:

```bash
alias viktor="/usr/bin/env bash <path>/viktorcli"
```

Remember to reload your config with `source ~/.zshrc` or `source ~/.bashrc`, depending on your shell settings.

You are ready to go! 🖥️ Start your project with:

```bash
mkdir my-project
cd my-project
viktor init
```

This creates a `.viktor` directory in your project. [More details about the .viktor directory](docs/viktor-dir).

Let's get started! 🚀

```bash
viktor up -d
```
This starts your containers and you can run your PHP project. [Learn more about Docker setup](docs/docker.md).
> Note: The default setup requires your `index.php` to be in the `/public/` directory relative to your project root, as most frameworks do.

### Tools

#### Composer

```bash
viktor composer --version
viktor composer require ...
```

#### PHP

```bash
viktor php -v
```

### Laravel

Install the latest Laravel into your project root. It also adds `composer require barryvdh/laravel-debugbar --dev`. I thought this was okay for every Laravel developer.

```bash
viktor laravel:install
```

#### Laravel Artisan Helper

```bash
viktor artisan 
```

#### Laravel Mercure Setup

The container comes with [Mercure](https://mercure.rocks/). There is a helper that prepares Laravel for you. **Make sure you do this only in an empty Laravel project**.

> Note: Since Laravel 11 (with the release of [Reverb](https://reverb.laravel.com/)), you will be asked to install *Reverb* and *JavaScript dependencies*. You can say **No** to both. Currently, there is no way to run `php artisan install:broadcasting` unattended.
[Learn more about Mercure setup](docs/laravel-mercure-setup.md).

```bash
viktor laravel:setup-mercure 
```


#### Laravel Mercure Example Plugin

This repository contains a simple, **not meant for production** plugin as an example of how to work with Mercure.

```bash
viktor laravel:install-example
```
To remove this example, remove the package with composer `composer remove pictus/laravel-livereaction` and remove the `repositories.pictus-laravel-mercure-example` entry from your `composer.json`.
[learn more about laravel example plugin](docs/laravel-example-plugin.md)