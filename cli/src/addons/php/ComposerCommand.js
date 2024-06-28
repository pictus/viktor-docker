import { CliOption } from '../../cli/CliOption.js';
import { defaultContainer } from '../../docker/defaultContainer.js';

export class ComposerCommand extends CliOption {
    title = 'composer';
    description = `shortcut for composer`;

    async handler(args) {
        defaultContainer.execRaw(
            'composer ' + this.rawArgs('composer').join(' ')
        );
    }
}