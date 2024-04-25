import { CliOption } from '../../cli/CliOption.js';
import { DockerComposeInteract } from '../../docker/DockerComposeInteract.js';
import fs from "fs";
import { MERCURE_JWT_KEY } from '../../enviroment.js';

export class PhpCommand extends CliOption {
    title = 'php';
    description = `execute php`;

    async handler(args) {
        const docker = new DockerComposeInteract().execRaw(
            'php ' + this.rawArgs('php').join(' ')
        );

    }
}