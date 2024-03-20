## Installing Laravel
After starting the container, you can directly install the latest version of [Laravel](https://laravel.com). But be careful, when installing Laravel, you must use `frankenphp-project (Viktor)` in a subdirectory of your project. See submodule for more information.

To install Laravel automatically and copy it into your project repository, run the following command:

**NOTE!** Make sure that in `./viktor/.env`, `DC_APP_DIR` is set to `../` See [submodule](/submodule.md) for more information.

```bash
./viktor/bin/exec.sh ./viktor/bin/d/install-laravel.sh
```
