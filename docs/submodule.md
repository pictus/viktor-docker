### Submodule Mode

In submodule mode, you can include `frankenphp-project` in your repository. And the best part? It even installs Laravel for you if you want. 🛠️ More frameworks and tools may follow.

To do this, we'll be using [git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules). If you don't have an existing repository, simply create one:

```bash
mkdir my-awesome-project && cd my-awesome-project
git init
```

Then, add frankenphp-project to your repository as a submodule:

```bash
git submodule add https://github.com/pictus/frankenphp-project.git viktor
```

Next, edit `./viktor/.env`. Refer to the [quickstart](quick-start.md) guide for reference. Then, start the container, from your main repository:

Make sure you update `./viktor/.env` `DC_APP_DIR` value, to your project-root directory!
```bash
DC_APP_DIR=../
```

```bash
docker compose -f viktor/docker-compose.yml up -d
```

Please note that `frankenphp-project` is prepared for most frameworks and uses `public/index.php` as entry point. You may need to create this file. Refer to the [quickstart](quick-start.md) for more info.

Now that everything is up and running, you might be wondering, what [tools](tools.md) are available? Can I also [install Laravel](tools.md)? 🤔