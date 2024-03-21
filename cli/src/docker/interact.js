import { spawn } from 'child_process'
// const { exec } = require('node:child_process');
import {exec} from 'node:child_process'


export class DockerComposeInteract {
    path='';
    serviceName='';

    constructor(path, serviceName) {
        this.path = path;
        this.serviceName = serviceName;
    }

    interact(containerCommand, dockerCommand = '') {
        const command = `docker compose -f ./docker_repo/docker-compose.yml ${dockerCommand} ${containerCommand}`
        const shell = spawn(command,[], { stdio: 'inherit', shell: true  })
        shell.on('close', (code)=>{if(code !== 0) console.log('[victor shell] terminated :', code)});
        shell.on('data', (data)=>{console.log(data.toString())});
    }

    up(args) {
        this.interact('up -d');
    }

    down(args) {
        this.interact('down');
    }

    exec(args) {
        console.log('args in exec', args);
        this.interact(args, 'exec server');
    }

}