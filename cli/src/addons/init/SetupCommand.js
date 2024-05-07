import { confirmPrompt } from '../../prompt/utils.js'
import { setupQuestions } from './setupQuestions.js';
import { setupProjectFiles } from './utils.js';
import { CliOption } from '../../cli/CliOption.js';
import inquirer from 'inquirer';
import { defaultConfig } from '../../enviroment.js';


export class InitCommand extends CliOption {
    title = 'init';
    description = 'initialize a project';
    
    async handler(args) {
        // set defaults
        let enviroment = Object.assign(defaultConfig, await inquirer.prompt(setupQuestions));
        // delete internal keys
        Object.keys(enviroment).forEach(key => {
            if(key.includes('INT_')) {
                delete enviroment[key];
            }
        });

        enviroment = Object.assign({
            '# viktor setup': '',
        }, enviroment);

        const confirm = await confirmPrompt('Are thes Settings Ok?');
        if(!confirm) {
            console.log('TODO: not confirmed, start over or stop');
            return;
        }

        setupProjectFiles(enviroment);       
        console.log('----------------------------------------------');
        console.log('your .env file is setup at ".viktor/.env"');
        console.log('run "viktor up" to start');
    }
}