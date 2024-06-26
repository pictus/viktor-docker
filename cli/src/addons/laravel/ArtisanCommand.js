import { CliOption } from '../../cli/CliOption.js';
import { defaultContainer } from '../../docker/defaultContainer.js';

export class ArtisanCommand extends CliOption {
    title = 'artisan';
    description = 'use laravels artisan';

    async handler(args) {
        const commandArgs = this.rawArgs('artisan');
        await defaultContainer.execRaw(`\
            php artisan ${commandArgs.join(' ')}
        `);
    }
}