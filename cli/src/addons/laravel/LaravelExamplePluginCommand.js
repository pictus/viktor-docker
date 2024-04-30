import { CliOption } from "../../cli/CliOption.js";
import { DockerComposeInteract } from "../../docker/DockerComposeInteract.js";

export class LaravelExamplePlugin extends CliOption {
    title = 'laravel:install-example-plugin';
    description = 'install example plugin for mercure integration';
    
    async handler(args) {
        const docker = new DockerComposeInteract();        
        await docker.execRaw(`\
            composer config repositories.pictus-laravel-mercure-example '{"type": "path", "url": ".viktor/viktor/data/laravel-livereaction", "options": {"symlink": true}}'
        `);
        await docker.execRaw(`\
            composer require pictus/laravel-livereaction @dev
        `);
        await docker.execRaw(`\
            php artisan cache:clear
        `);
    }
}