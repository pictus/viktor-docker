import { CliOption } from '../../cli/CliOption.js';
import { defaultContainer } from '../../docker/defaultContainer.js';
import { MERCURE_JWT_KEY } from '../../enviroment.js';

export class LaravelSetupBroadcast extends CliOption {
    title = 'laravel:setup-mercure';
    description = `prepares laravel for mercure broadcasting`;

    async handler(args) {
        const docker = defaultContainer;

        await docker.execRaw(`php artisan install:broadcasting`);
        await docker.execRaw(`composer require mvanduijker/laravel-mercure-broadcaster`);
        await docker.execRaw(`\
            echo "" >> .env && \
            echo "MERCURE_SECRET="${MERCURE_JWT_KEY} >> .env && \
            echo "MERCURE_URL=https://localhost:443/.well-known/mercure" >> .env &&
            mv routes/channels.php routes/channels-bckp.php
        `);
        // sed -i 's/^\(BROADCAST_CONNECTION=\).*/\1mercure/' .env
        await docker.execRaw("sed -i 's/^\\(BROADCAST_CONNECTION=\\).*/\\1mercure/' .env");
        // sed -i "/'connections' => \[/a \\\n        'mercure' => ['driver'=>'mercure','url'=>env('MERCURE_URL', '/.well-known/mercure'),'secret' => env('MERCURE_SECRET', 'aVerySecretKey')]," config/broadcasting.php
        await docker.execRaw("sed -i \"/'connections' => \\[/a \\\\\\n        'mercure' => ['driver' => 'mercure', 'url' => env('MERCURE_URL', '/.well-known/mercure'), 'secret' => env('MERCURE_SECRET', 'aVerySecretKey')],\" config/broadcasting.php");
        await docker.execRaw(`php artisan cache:clear`);
        await docker.execRaw(`php artisan optimize:clear`);  
    }
}