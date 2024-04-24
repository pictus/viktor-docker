import { CliOption } from '../../cli/CliOption.js';
import { DockerComposeInteract } from '../../docker/interact.js';
import fs from "fs";

export class ArtisanCommand extends CliOption {
    title = 'artisan [command]';
    description = 'use laravels artisan';
    
    async handler(args) {
        const docker = new DockerComposeInteract();
        const commandArgs = docker.rawArgs('artisan');
        
        await docker.execRaw(`\
            php artisan ${commandArgs.join(' ')}
        `)
    }
}