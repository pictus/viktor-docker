
## Laravel Broadcasting 📡

When [Laravel is installed](/docs/laravel.md) 🚀, you're all set to supercharge it with broadcasting powers, making your Laravel app Mercure ready!

👇 Here's how to install the required packages for broadcasting and set up Laravel to work perfectly with Mercure.

*Note on Laravel 11*: The script runs `php artisan broadcast:install`. However, Laravel 11 asks a couple of questions about installing reverb and required node modules. Since using Mercure, you can say **No** to both.

```bash
./viktor/bin/exec.sh ./viktor/bin/d/install-laravel-broadcasting.sh
```

This command 🪄  sets up your `config/broadcasting.php` for the Mercure driver and fine-tunes your Laravel `.env` with:
- `MERCURE_URL` 
- `MERCURE_SECRET`
- `BROADCAST_CONNECTION=mercure`
- `QUEUE_CONNECTION=sync`

🚨 **NOTE on `QUEUE_CONNECTION`**: We've set this to `sync` for better debugging and an instant out-of-the-box experience. But remember, this is not for the Production stage! **We strongly recommend switching this for Production** for the sake of performance and efficiency.


### Install Example Plugin for Laravel 🧩

Got everything set up but wondering, "Now what?" `pictus/viktor-docker` comes with a simple Example Plugin for Laravel to get you started.

```bash
./viktor/bin/exec.sh ./viktor/bin/d/install-laravel-mercure-example.sh
```

This command installs `Pictus\LiveReaction` to `vendor_local` in your Laravel root directory and adds a repository entry to your `composer.json`.

Now, open your browser at `https://localhost:<ssl_port>/live-reaction`! 🌟

**NOTE**: While this plugin is a stellar example, it's not designed for production use. Consider it your playground for experimentation.


### Deleting the Example Plugin 🗑️

- Run `composer remove pictus/laravel-livereaction`
- Delete the `repositories` entry from `composer.json`
- Execute `rm -rf vendor_local` to remove the `vendor_local` directory


### Troubleshooting 🔍

Ensure your container was built with `DC_INSTALL_MERCURE` set to `1`.

```bash
# Inside ./viktor/.env
DC_INSTALL_MERCURE=1
```

Now, you're all set to dive into the world of Laravel broadcasting with Mercure! 🎉 
Happy coding, and may your broadcasts be smooth and your connections instant! 🚀