import { spawn } from 'child_process'
import {exec} from 'node:child_process'

export function tty(command) {
    const shell = spawn(command,[], { stdio: 'inherit', shell: true  })
    shell.on('close', (code)=>{if(code !== 0) console.log('[victor shell] terminated :', code)});
    shell.on('data', (data)=>{console.log(data.toString())});
}

export class DockerComposeInteract {
    path='';
    serviceName='';

    constructor(path, serviceName) {
        this.path = path;
        this.serviceName = serviceName;
    }

    interact(containerCommand, dockerCommand = '') {
        // todo: file from .env
        // flip args, maybe make a "build command" function
        const command = `docker compose -f ./docker_repo/docker-compose.yml ${dockerCommand} ${containerCommand}`
        tty(command)
    }

    up(args) {
        this.interact('up -d');
    }

    down(args) {
        this.interact('down');
    }

    exec(args) {
        // todo server from .env
        this.interact(args, 'exec server');
    }

}