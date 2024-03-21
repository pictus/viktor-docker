import crypto from 'crypto';
import inquirer from 'inquirer';
import { setupQuestions } from './setupQuestions.js';
import fs from 'fs';

export async function setupGuide() {
    return await inquirer.prompt(setupQuestions);
}

export function parseConfigToEnv(config) {
    let data = '';
    for(let key in config) {
        data += `${key}=${config[key]}\n`
    }
    return data;
}

export function writeSetupEnviromentFile(config, path) {
    fs.appendFileSync(path, parseConfigToEnv(config));
}