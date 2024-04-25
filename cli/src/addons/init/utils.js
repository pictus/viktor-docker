import { PROJECT_DIR_NAME } from '../../enviroment.js';
import { tty } from '../../docker/DockerComposeInteract.js';
import fs from "fs";

export function parseConfigToEnv(config) {
    let data = '';
    let val = '';
    
    for(let key in config) {
        if(key.substring(0,1) != '#') {
            val = `=${config[key]}`;
        }
        data += `${key}${val}\n`
    }
    return data;
}

export function writeSetupEnviromentFile(config, path) {
    fs.appendFileSync(path, parseConfigToEnv(config));
}

export function setupProjectFiles(enviroment) {
    fs.mkdirSync(PROJECT_DIR_NAME);
    fs.mkdirSync(PROJECT_DIR_NAME + '/addons');
    writeSetupEnviromentFile(enviroment, PROJECT_DIR_NAME + '/.env');
    tty(`git clone https://github.com/pictus/viktor-docker.git ${PROJECT_DIR_NAME}/viktor`)
}