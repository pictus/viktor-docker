import { CliOption } from "../../cli/CliOption.js";
import { DockerComposeInteract } from "../../docker/interact.js";

export class UpCommand extends CliOption {
    title = 'up [options]';
    description = 'start the container';
    
    handler(args) {
        console.log('run handler...');

        new DockerComposeInteract().up(args);
    }
}