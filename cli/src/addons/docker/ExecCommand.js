import { CliOption } from "../../cli/CliOption.js";
import { defaultContainer } from "../../docker/defaultContainer.js";

export class ExecCommand extends CliOption {
    title = 'exec';
    description = 'exec container';
    
    handler(args) {
        defaultContainer.execRaw(this.rawArgs('exec').join(' '));
    }
}