import { CliOption } from "../../cli/CliOption.js";
import { defaultContainer } from "../../docker/defaultContainer.js";
import { APP_NAME, VIKTOR_DOCKER_COMPOSE } from "../../enviroment.js";

export class UpCommand extends CliOption {
    title = 'up';
    description = 'start the container';
    
    handler(args) {
        console.log(`\nStarting ${APP_NAME} Container \nfrom: ${VIKTOR_DOCKER_COMPOSE}`)
        defaultContainer.interact("up " + this.rawArgs('up').join(' '));
    }
}