import { CliOption } from "../../cli/CliOption.js";
import { DockerComposeInteract } from "../../docker/DockerComposeInteract.js";
import { APP_NAME, VIKTOR_DOCKER_COMPOSE } from "../../enviroment.js";

export class UpCommand extends CliOption {
    title = 'up';
    description = 'start the container';
    
    handler(args) {
        console.log(`\nStarting ${APP_NAME} Container \nfrom: ${VIKTOR_DOCKER_COMPOSE}`)
        new DockerComposeInteract().interact("up " + this.rawArgs('up').join(' '));
    }
}