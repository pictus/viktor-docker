import { CliOption } from '../../cli/CliOption.js';
import { defaultContainer } from '../../docker/defaultContainer.js';

export class PhpCommand extends CliOption {
    title = 'php';
    description = `execute php`;

    async handler(args) {
        const docker = defaultContainer.execRaw(
            'php ' + this.rawArgs('php').join(' ')
        );

    }
}