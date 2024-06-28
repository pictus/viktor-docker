import { spawn } from 'child_process';
import { CONTAINER } from '../enviroment.js';
import { rawArgs } from '../prompt/utils.js';

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
    
    constructor(composeFilePath) {
        this.composeFilePath = composeFilePath;
    }

    interact(containerCommand, dataCallback) {
        console.log('..interact', this.makeCommand(containerCommand));

        return tty(
            this.makeCommand(containerCommand), 
            dataCallback
        );
    }

    makeCommand(containerCommand) {
        return `docker compose -f ./${this.composeFilePath} ${containerCommand}`;
    }

    execRaw(args, dataCallback) {
        let service = CONTAINER;
        
        const serviceArg = rawArgs('-s');
        if(serviceArg.length > 0) {
            service = serviceArg[0];
        }        

        return this.interact(`exec ${service} ${args}`, dataCallback);
    }

}