import { CliOption } from '../../cli/CliOption.js';
import { DockerComposeInteract } from '../../docker/interact.js';
import fs from "fs";

export class LaravelCommand extends CliOption {
    title = 'laravel';
    description = 'install and work with laravel';
    
    async handler(args) {
        const otherFiles = fs.readdirSync('.').filter(file => {
            return file != '.viktor' && file != 'patch-directory.sh'
        });

        if(otherFiles.length > 0) {
            console.warn('your empty is not empty! Only `.viktor` directory is allowed');
            return;
        }

        const docker = new DockerComposeInteract();
        await docker.execRaw(`\
            composer create-project --prefer-dist laravel/laravel laravel && \
            cp -ra laravel/. .
        `)
        await docker.execRaw(`php artisan key:generate`)
    }
}