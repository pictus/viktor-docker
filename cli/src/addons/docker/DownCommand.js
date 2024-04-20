import { CliOption } from "../../cli/CliOption.js";
import { DockerComposeInteract } from "../../docker/interact.js";

export class DownCommand extends CliOption {
    title = 'down [options]';
    description = 'start the container';
    
    handler(args) {
        new DockerComposeInteract().down(args);
    }
}