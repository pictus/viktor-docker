import { CliOption } from '../../cli/CliOption.js';
import { DockerComposeInteract } from '../../docker/DockerComposeInteract.js';

export class ComposerCommand extends CliOption {
    title = 'composer';
    description = `shortcut for composer`;

    async handler(args) {
        new DockerComposeInteract().execRaw(
            'composer ' + this.rawArgs('composer').join(' ')
        );
    }
}