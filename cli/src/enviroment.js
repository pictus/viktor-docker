export const defaultConfig = {
    APP_NAME: 'viktor-project',
    VICTOR_ROOT: './.viktor/viktor/',
    DOCKERFILE: './viktor/viktor/data/docker-compose.yml',
    CONTAINER: 'server',
    SERVER_PORT_UNSECURE: 8080,
    SERVER_PORT_SECURE: 4443,
    SERVER_NAME: 'localhost',
    MERCURE_ENABLE: '1',
    MERCURE_JWT_KEY: '', // defaulted by random key in setupQuestions
    // for internal usage in the prompts    
    INT_PORTS: true,
};
export const PROJECT_DIR_NAME='.viktor'