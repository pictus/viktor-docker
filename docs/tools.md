### Interacting with the Container

`frankenphp-project` provides a few tools to interact with the container. Please note that you may need to adjust `DC_DOCKERFILE` and `DC_CONTAINER` in `./viktor/.env` as necessary.

#### Structure
- `./viktor/bin/`
    - `exec.sh`: Allows you to execute commands inside the container. For example, you can run `./viktor/bin/exec.sh php artisan info`. You can also run scripts located in `./viktor/scripts/d/` using `./viktor/bin/exec.sh ./viktor/bin/d/install-laravel.sh`. 🛠️
    - `login.sh`: Puts you into a terminal session inside the container. 💻

#### Shortcuts 🛤️ 

Looking for shortcuts? 🛤️ We've got you covered! Create an npm script like this:

```json
{
    ...
    "scripts": {
        ...
        "dc-dev": "docker compose -f=./viktor/docker-compose.yml up --build -d"
    }
}

```