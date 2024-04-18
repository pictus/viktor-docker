export const defaultConfig = {
    DC_APP_DIR: '../',
    DC_VICTOR_ROOT: './viktor/',
    DC_DOCKERFILE: 'viktor/docker-compose.yml',
    DC_CONTAINER: 'server',
    DC_SERVER_PORT_UNSECURE: 8080,
    DC_SERVER_PORT_SECURE: 4443,
    DC_SERVER_NAME: 'localhost',
    DC_INSTALL_MERCURE: 1,
    DC_MERCURE_PUBLISHER_JWT_KEY: '', // defaulted by random key in setupQuestions
    DC_MERCURE_SUBSCRIBER_JWT_KEY: '',
    // for internal usage in the prompts    
    INT_PORTS: true,
};