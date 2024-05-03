import { CliOption } from '../../cli/CliOption.js';
import { DockerComposeInteract } from '../../docker/DockerComposeInteract.js';
import fs from "fs";
import { APP_NAME } from '../../enviroment.js';

export class ArtisanCommand extends CliOption {
    title = 'artisan';
    description = 'use laravels artisan';

    async builderCallback(yargs, helpOrVersionSet) {
        // console.log('hello...');
        // console.log(fs.readFileSync(
        //     './.env',
        //     {encoding: 'utf-8', flag: 'r'}
        // ));

        // const commands = yargs.option('velp', {
        //     describe: 'call help for ' + this.title
        // })
        // .command('viktor artisan make:model') // possible to get input from `php artsian --help` to parse here?
        // .example('viktor artisan make:model FooBar', 'to create an Model')
        // .epilogue('default epiloque');

        return commands;
    }

    async handler(args) {
        const docker = new DockerComposeInteract();
        const commandArgs = this.rawArgs('artisan');
        console.log('run artisan with', commandArgs);
        await docker.execRaw(`\
            php artisan ${commandArgs.join(' ')}
        `);
    }
}