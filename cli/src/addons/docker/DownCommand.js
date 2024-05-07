import { CliOption } from "../../cli/CliOption.js";
import { DockerComposeInteract } from "../../docker/DockerComposeInteract.js";
import { APP_NAME, VIKTOR_DOCKER_COMPOSE } from "../../enviroment.js";

export class DownCommand extends CliOption {
    title = 'down';
    description = 'start the container';
    
    handler(args) {
        console.log(`\Stopping ${APP_NAME} Container \nfrom: ${VIKTOR_DOCKER_COMPOSE}`)
        new DockerComposeInteract().interact("down " + this.rawArgs('down').join(' '));
    }
}