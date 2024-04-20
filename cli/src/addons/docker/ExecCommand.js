import { CliOption } from "../../cli/CliOption.js";
import { DockerComposeInteract } from "../../docker/interact.js";

export class ExecCommand extends CliOption {
    title = 'exec [options]';
    description = 'exec container';
    
    handler(args) {
        new DockerComposeInteract().exec(args);
    }
}