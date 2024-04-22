import {defaultConfig } from '../enviroment.js'
import crypto from 'crypto';
import { promptObject } from '../prompt/utils.js';

const randomKey = (length) => crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);

export const setupQuestions1 = [
    {
        type: 'input',
        name: 'APP_NAME',
        message: 'your app name',
        default: defaultConfig.APP_NAME
    },
    {
        type: 'input',
        name: 'VIKTOR_ROOT',
        message: 'viktor directory relative to your app root path',
        default: defaultConfig.VICTOR_ROOT,

        validate() {
            // check if directory exists
            return true;
        }
    }
];

export const setupQuestions = [
    {
        type: 'input',
        name: 'APP_NAME',
        message: 'your app name',
        default: defaultConfig.APP_NAME
    },
    {
        type: 'input',
        name: 'VIKTOR_ROOT',
        message: 'viktor directory relative to your app root path',
        default: defaultConfig.VICTOR_ROOT,

        validate() {
            // check if directory exists
            return true;
        }
    },
    {
        type: 'input',
        name: 'APP_DIR',
        message: 'your app root directory relative to viktor path',
        default: defaultConfig.APP_DIR,

        when(answers) {
            return answers.DC_VIKTOR_ROOT !== defaultConfig.DC_VICTOR_ROOT
        },
        validate() {
            // check if directory exists
            return true;
        }
    },
    {
        type: 'input',
        name: 'DOCKERFILE',
        message: 'docker-compose file relative to your project root path',
        default: defaultConfig.DOCKERFILE,
        validate() {
            // check if file exists
            return true;
        }
    },
    {
        type: 'input',
        name: 'CONTAINER',
        message: 'frankenphp container name, to access via cli',
        default: defaultConfig.CONTAINER
    },
    promptObject(
        'INT_PORTS', 
        `Are these Ports Ok? http: ${defaultConfig.SERVER_PORT_UNSECURE}, https: ${defaultConfig.SERVER_PORT_SECURE}`
    ),
    /* only INI_PORTS: false*/ {
        type: 'number',
        name: 'SERVER_PORT_UNSECURE',
        default: defaultConfig.SERVER_PORT_UNSECURE,
        message: 'Port unsecure (http)',
        when(answers) {
            return answers.INT_PORTS === false;
        }
    },
    /* only INI_PORTS: false*/ {
        type: 'number',
        name: 'SERVER_PORT_SECURE',
        default: defaultConfig.SERVER_PORT_SECURE,
        message: 'Port secure (https)',
        when(answers) {
            return answers.INT_PORTS === false;
        }
    },
    {
        type: 'input',
        name: 'SERVER_NAME',
        default: defaultConfig.SERVER_NAME,
        message: 'Servername',
    },
    {
        type: 'input',
        name: 'MERCURE_PUBLISHER_JWT_KEY',
        default: randomKey(32),
        message: 'Mercure JWT Keys',
        when(answers) {
            return answers.INSTALL_MERCURE === 1;
        }
    }
];