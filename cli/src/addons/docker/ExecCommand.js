import { CliOption } from "../../cli/CliOption.js";
import { DockerComposeInteract } from "../../docker/DockerComposeInteract.js";

export class ExecCommand extends CliOption {
    title = 'exec';
    description = 'exec container';
    
    handler(args) {
        new DockerComposeInteract().execRaw(this.rawArgs('exec').join(' '));
    }
}