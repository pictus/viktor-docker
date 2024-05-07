import { spawn } from 'child_process'
import { VIKTOR_DOCKER_COMPOSE } from '../enviroment.js';

export function tty(command, dataCallback) {
    return new Promise((resolve, reject) => {
        const shell = spawn(command, [], { stdio: 'inherit', shell: true });
        
        shell.on('close', (code)=>{
            if(code !== 0) {
                console.log('[viktor] terminated :', code)
                reject(code);
                return;
            }
            resolve(code);
        });

        shell.on('data', (data) => {
            if(dataCallback) {
                dataCallback(data);
                return;
            }

            console.log(data.toString());
        });
    });
}
    

export class DockerComposeInteract {
    
    interact(containerCommand, dataCallback) {
        return tty(`\
            docker compose -f \
            ./${VIKTOR_DOCKER_COMPOSE} ${containerCommand}
        `, dataCallback)
    }

    /** up, down and exec can go to the command also the parsing of input */
    // up(args) {
    //     this.interact("up " + this.rawArgs('up').join(' '));
    // }

    // down(args) {
    //     this.interact('down');
    // }

    // exec(args) {
    //     const shift = this.rawArgs('exec');
    //     this.interact('exec server ' + this.rawArgs('exec').join(' '));
    // }

    execRaw(args, dataCallback) {
        return this.interact(`exec server ${args}`, dataCallback);
    }

}