import _ from './src/bootstrap.js'
import yargs from 'yargs';
import { UpCommand } from './src/addons/docker/UpCommand.js';
import { DownCommand } from './src/addons/docker/DownCommand.js';
import { ExecCommand } from './src/addons/docker/ExecCommand.js';
import { InitCommand } from './src/addons/init/SetupCommand.js';
import { LaravelInstallCommand } from './src/addons/laravel/LaravelInstallCommand.js';
import { ArtisanCommand } from './src/addons/laravel/ArtisanCommand.js';
import { LaravelSetupBroadcast } from './src/addons/laravel/LaravelSetupBroadcastCommand.js';
import { ComposerCommand } from './src/addons/php/ComposerCommand.js';
import { PhpCommand } from './src/addons/php/PhpCommand.js';
import { LaravelExamplePlugin } from './src/addons/laravel/LaravelExamplePluginCommand.js';
import { DockerComposeInteract } from './src/docker/DockerComposeInteract.js';

const plugins = [
  new InitCommand(),
  new UpCommand(),
  new DownCommand(),
  new ExecCommand(),
  new PhpCommand(),
  new ComposerCommand(),

  new LaravelInstallCommand(),
  new LaravelSetupBroadcast(),
  new LaravelExamplePlugin(),
  new ArtisanCommand(),
];

const commands = yargs(process.argv.slice(2));
commands.scriptName('viktor')
    .usage('$0 <cmd> [args]')
    .help()
    .showHelpOnFail(true)
    .help(
      // 'help',
      // 'Show usage instructions.'
    ).wrap(Math.min(120, commands.terminalWidth()))

    
    // .command('*', )

plugins.forEach((plugin) => {
  /*
    command: string | readonly string[],
    description: string,
    builder?: BuilderCallback<T, U>,
    handler?: (args: ArgumentsCamelCase<U>) => void | Promise<void>,
    middlewares?: Array<MiddlewareFunction<U>>,
    deprecated?: boolean | string,
  */

  commands.command(
    plugin.title,
    plugin.description,
    (yargs) => { plugin.builderCallback(yargs) },
    async (argv) => { plugin.handler(argv) },
    plugin.middlewares(),
    plugin.deprecated
  );
  // todo .zshrc completitions
  // with `.completition()`
})

// commands.parse();
commands.demandCommand().argv


    // .command(
    //   'hello [name]', 'welcome ter yargs!', 
    //   (yargs) => {
    //   yargs.positional('name', {
    //   type: 'string',
    //   default: 'Cambi',
    //   describe: 'the name to say hello to'
    //   });
    //   }, 
    //   (argv) => {
    //   console.log('hello', argv.name, 'welcome to yargs!')
    //   }
    // )
