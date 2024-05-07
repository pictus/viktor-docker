import { CliOption } from '../../cli/CliOption.js';
import { DockerComposeInteract } from '../../docker/DockerComposeInteract.js';
import fs from "fs";

export class LaravelInstallCommand extends CliOption {
    title = 'laravel:install';
    description = 'install latest laravel';

    async handler(args) {
        const otherFiles = fs.readdirSync('.').filter(file => {
            return file != '.viktor' 
                    && file != 'patch-directory.sh'
                    && file != '.DS_Store'
        });

        if(otherFiles.length > 0) {
            console.warn('your empty is not empty! Only `.viktor` directory is allowed');
            return;
        }

        const docker = new DockerComposeInteract();
        await docker.execRaw(`\
            composer create-project --prefer-dist laravel/laravel laravel && \
            cp -r laravel/. . && \
            rm -rf laravel
        `)
        await docker.execRaw(`php artisan key:generate`);
        await docker.execRaw(`composer require barryvdh/laravel-debugbar --dev`)
    }
}