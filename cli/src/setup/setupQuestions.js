import {defaultConfig } from '../enviroment.js'
import crypto from 'crypto';

const randomKey = (length) => crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);

export const setupQuestions1 = [
    {
        type: 'input',
        name: 'DC_VIKTOR_ROOT',
        message: 'viktor directory relative to your app root path',
        default: defaultConfig.DC_VICTOR_ROOT,

        validate() {
            // check if directory exists
            return true;
        }
    }
];

export const setupQuestions = [
    {
        type: 'input',
        name: 'DC_VIKTOR_ROOT',
        message: 'viktor directory relative to your app root path',
        default: defaultConfig.DC_VICTOR_ROOT,

        validate() {
            // check if directory exists
            return true;
        }
    },
    {
        type: 'input',
        name: 'DC_APP_DIR',
        message: 'your app root directory relative to viktor path',
        default: defaultConfig.DC_APP_DIR,

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
        name: 'DC_DOCKERFILE',
        message: 'docker-compose file relative to your project root path',
        default: defaultConfig.DC_DOCKERFILE,
        validate() {
            // check if file exists
            return true;
        }
    },
    {
        type: 'input',
        name: 'DC_CONTAINER',
        message: 'frankenphp container name, to access via cli',
        default: defaultConfig.DC_CONTAINER
    },
    {
        type: 'list',
        name: 'INT_PORTS',
        default: defaultConfig.INT_PORTS,
        choices: ['yes', 'no'],
        // todo: bisschen chalk
        message: `Are these Ports Ok? http: ${defaultConfig.DC_SERVER_PORT_UNSECURE}, https: ${defaultConfig.DC_SERVER_PORT_SECURE}`,
        filter(val) {
            return val === 'yes'; 
        }
    }, 
    {
        type: 'number',
        name: 'DC_SERVER_PORT_UNSECURE',
        default: defaultConfig.DC_SERVER_PORT_UNSECURE,
        message: 'Port unsecure (http)',
        when(answers) {
            return answers.INT_PORTS === false;
        }
    },
    {
        type: 'number',
        name: 'DC_SERVER_PORT_SECURE',
        default: defaultConfig.DC_SERVER_PORT_SECURE,
        message: 'Port secure (https)',
        when(answers) {
            return answers.INT_PORTS === false;
        }
    },
    {
        type: 'input',
        name: 'DC_SERVER_NAME',
        default: defaultConfig.DC_SERVER_NAME,
        message: 'Servername',
    },
    {
        type: 'list',
        name: 'DC_INSTALL_MERCURE',
        default: defaultConfig.DC_INSTALL_MERCURE === 1 ? 'yes' : 'no',
        message: 'Install mercure.hub?',
        choices: ['yes', 'no'],
        filter(val) {
            return val === 'yes';
        }
    },
    {
        type: 'input',
        name: 'DC_MERCURE_PUBLISHER_JWT_KEY',
        default: randomKey(32),
        message: 'Mercure JWT Keys',
        when(answers) {
            return answers.DC_INSTALL_MERCURE === 1;
        }
    }
];