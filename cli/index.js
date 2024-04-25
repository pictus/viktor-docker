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


const questions = [
  {
    type: 'confirm',
    name: 'toBeDelivered',
    message: 'Is this for delivery?',
    default: false,
    transformer: (answer) => (answer ? '👍' : '👎'),
  },
  {
    type: 'input',
    name: 'phone',
    message: "What's your phone number?",
    validate(value) {
    //   const pass = value.match(
    //     /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i,
    //   );
    //   if (pass) {
        return true;
    //   }

      return 'Please enter a valid phone number';
    },
  },
  {
    type: 'list',
    name: 'size',
    message: 'What size do you need?',
    choices: ['Large', 'Medium', 'Small'],
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: 'input',
    name: 'quantity',
    message: 'How many do you need?',
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'expand',
    name: 'toppings',
    message: 'What about the toppings?',
    choices: [
      {
        key: 'p',
        name: 'Pepperoni and cheese',
        value: 'PepperoniCheese',
      },
      {
        key: 'a',
        name: 'All dressed',
        value: 'alldressed',
      },
      {
        key: 'w',
        name: 'Hawaiian',
        value: 'hawaiian',
      },
    ],
  },
  {
    type: 'rawlist',
    name: 'beverage',
    message: 'You also get a free 2L beverage',
    choices: ['Pepsi', '7up', 'Coke'],
  },
  {
    type: 'input',
    name: 'comments',
    message: 'Any comments on your purchase experience?',
    default: 'Nope, all good!',
  },
  {
    type: 'list',
    name: 'prize',
    message: 'For leaving a comment, you get a freebie',
    choices: ['cake', 'fries'],
    when(answers) {
      return answers.comments !== 'Nope, all good!';
    },
  },
];

const plugins = [
  new InitCommand(),
  new UpCommand(),
  new DownCommand(),
  new ExecCommand(),
  new LaravelInstallCommand(),
  new LaravelSetupBroadcast(),
  new ArtisanCommand(),
  new ComposerCommand(),
  new PhpCommand(),
];

const commands = yargs(process.argv.slice(2))
    .scriptName('viktor')
    .usage('$0 <cmd> [args]');

plugins.forEach((plugin) => {
  commands.command(
    plugin.title,
    plugin.description,
    (yargs) => { plugin.builderCallback(yargs) },
    async (argv) => { plugin.handler(argv) }
  )
})

commands.help().parse()
commands.argv


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
