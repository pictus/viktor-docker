import { spawn } from 'child_process'
import {exec} from 'node:child_process'
import { PROJECT_DIR_NAME } from '../enviroment.js';

export function tty(command) {
    return new Promise((resolve, reject) => {
        const shell = spawn(command,[], { stdio: 'inherit', shell: true  })
        
        shell.on('close', (code)=>{
            if(code !== 0) {
                console.log('[viktor] terminated :', code)
                reject(code);
                return;
            }
            resolve(code);
        });

        shell.on('data', (data)=>{console.log(data.toString())});
    });
}
    

export class DockerComposeInteract {
    
    interact(containerCommand) {
        // todo: file from .env
        // flip args, maybe make a "build command" function
        console.log('container command:', containerCommand);

        return tty(`\
            docker compose -f \
            ./${PROJECT_DIR_NAME}/viktor/docker-compose.yml ${containerCommand}
        `)
    }

    rawArgs(findString) {
        const dockerArgs = [...process.argv];
        dockerArgs.splice(0, process.argv.findIndex(a => a === findString) + 1);
        return dockerArgs;
    }
    /** up, down and exec can go to the command also the parsing of input */
    up(args) {
        this.interact("up " + this.rawArgs('up').join(' '));
    }

    down(args) {
        this.interact('down');
    }

    exec(args) {
        const shift = this.rawArgs('exec');
        this.interact('exec server ' + this.rawArgs('exec').join(' '));
    }

    execRaw(args) {
        return this.interact(`exec server ${args}`);
    }

}