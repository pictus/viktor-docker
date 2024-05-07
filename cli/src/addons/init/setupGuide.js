import crypto from 'crypto';
import inquirer from 'inquirer';
import { setupQuestions, setupQuestions1 } from './setupQuestions.js';
import fs from 'fs';
import { confirmPrompt } from '../prompt/utils.js'
import { PROJECT_DIR_NAME } from '../enviroment.js';
import { tty } from '../docker/DockerComposeInteract.js';

// export async function setupGuide() {
//     return await inquirer.prompt(setupQuestions1);
// }

// export function parseConfigToEnv(config) {
//     let data = '';
//     let val = '';
    
//     for(let key in config) {
//         if(key.substring(0,1) != '#') {
//             val = `=${config[key]}`;
//         }
//         data += `${key}${val}\n`
//     }
//     return data;
// }

// export function writeSetupEnviromentFile(config, path) {
//     fs.appendFileSync(path, parseConfigToEnv(config));
// }

// function setupProjectFiles(enviroment) {
//     console.log(enviroment);
//     fs.mkdirSync(PROJECT_DIR_NAME);
//     fs.mkdirSync(PROJECT_DIR_NAME + '/addons');
//     writeSetupEnviromentFile(enviroment, PROJECT_DIR_NAME + '/.env');
//     tty(`git clone https://github.com/pictus/viktor-docker.git ${PROJECT_DIR_NAME}/viktor`)
// }

// export async function runSetup() {
    // let enviroment = Object.assign({
    // '# viktor setup': '',
    // }, await setupGuide());
    
    // Object.keys(enviroment).forEach(key => {
    //     if(key.includes('INT_')) {
    //         delete enviroment[key];
    //     }
    // });

    // console.log('----------------------------------------------');
    // console.log('this is your configuratoin it will be stored');
    // console.log('in <.env-directory> are these settings ok?');
    // console.log(parseConfigToEnv(enviroment));
    
    // const confirm = await confirmPrompt('Are thes Settings Ok?');

    // if(!confirm) {
    //     console.log('TODO: not confirmed, start over or stop');
    // }
    
    // setupProjectFiles(enviroment);
    
    // console.log('----------------------------------------------');
    // console.log('your .env file is setup at <env-path>, now run the container');
    // console.log('now start the container.. `viktor docker up`');
// }