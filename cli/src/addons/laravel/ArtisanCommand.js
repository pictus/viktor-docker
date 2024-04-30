import { CliOption } from '../../cli/CliOption.js';
import { DockerComposeInteract } from '../../docker/DockerComposeInteract.js';
import fs from "fs";

export class ArtisanCommand extends CliOption {
    title = 'artisan';
    description = 'use laravels artisan';
    
    async handler(args) {
        const docker = new DockerComposeInteract();
        const commandArgs = this.rawArgs('artisan');
        
        await docker.execRaw(`\
            php artisan ${commandArgs.join(' ')}
        `)
    }
}