// import this to make sure
// we are able to get process.env vars
import './bootstrap.js';
export const PROJECT_DIR_NAME='.viktor'

export const defaultConfig = {
    APP_NAME: 'viktor-project',
    APP_DIR: '../../',
    VIKTOR_ROOT: './.viktor/viktor/',
    VIKTOR_DOCKER_COMPOSE: './.viktor/viktor/docker-compose.yml',
    VIKTOR_DOCKER: './.viktor/viktor/Dockerfile.server',
    CONTAINER: 'server',
    SERVER_PORT_UNSECURE: 8080,
    SERVER_PORT_SECURE: 4443,
    SERVER_NAME: 'localhost',
    MERCURE_ENABLE: '1',
    MERCURE_JWT_KEY: '', // defaulted by random key in setupQuestions
    // for internal usage in the prompts    
    INT_PORTS: true,
};

export const APP_NAME = process.env.APP_NAME ?? defaultConfig.APP_NAME;
export const APP_DIR = process.env.APP_DIR ?? defaultConfig.APP_DIR;
export const VIKTOR_ROOT = process.env.VIKTOR_ROOT ?? defaultConfig.VIKTOR_ROOT;
export const VIKTOR_DOCKER_COMPOSE = process.env.VIKTOR_DOCKER_COMPOSE ?? defaultConfig.VIKTOR_DOCKER_COMPOSE;
export const VIKTOR_DOCKER = process.env.VIKTOR_DOCKER ?? defaultConfig.VIKTOR_DOCKER;
export const CONTAINER = process.env.CONTAINER ?? defaultConfig.CONTAINER;
export const SERVER_PORT_UNSECURE = process.env.SERVER_PORT_UNSECURE ?? defaultConfig.SERVER_PORT_UNSECURE;
export const SERVER_PORT_SECURE = process.env.SERVER_PORT_SECURE ?? defaultConfig.SERVER_PORT_SECURE;
export const SERVER_NAME = process.env.SERVER_NAME ?? defaultConfig.SERVER_NAME;
export const MERCURE_ENABLE = process.env.MERCURE_ENABLE ?? defaultConfig.MERCURE_ENABLE;
export const MERCURE_JWT_KEY = process.env.MERCURE_JWT_KEY ?? defaultConfig.MERCURE_JWT_KEY;