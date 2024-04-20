import { spawn } from 'child_process'
import {exec} from 'node:child_process'
import { PROJECT_DIR_NAME } from '../enviroment.js';

export function tty(command) {
    const shell = spawn(command,[], { stdio: 'inherit', shell: true  })
    shell.on('close', (code)=>{if(code !== 0) console.log('[viktor] terminated :', code)});
    shell.on('data', (data)=>{console.log(data.toString())});
}


export class DockerComposeInteract {
    interact(containerCommand) {
        // todo: file from .env
        // flip args, maybe make a "build command" function

        tty(
            `
                docker compose -f \
                ./${PROJECT_DIR_NAME}/viktor/docker-compose.yml ${containerCommand}
            `
        )
    }

    rawArgs(findString) {
        const dockerArgs = [...process.argv];
        dockerArgs.splice(0, process.argv.findIndex(a => a === findString) + 1);
        return dockerArgs;
    }

    up(args) {
        this.interact("up " + this.rawArgs('up').join(' '));
    }

    down(args) {
        this.interact('down');
    }

    exec(args) {
        const shift = this.rawArgs('exec');
        console.log('shifted args', shift, args);
        this.interact('exec server ' + this.rawArgs('exec').join(' '));
    }

}