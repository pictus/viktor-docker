import yargs from 'yargs/yargs';
import inquirer from 'inquirer';
import { setupGuide, writeSetupEnviromentFile, parseConfigToEnv } from './src/setup/setupGuide.js'
import { confirmPrompt } from './src/prompt/utils.js';
import { DockerComposeInteract } from './src/docker/interact.js';



/*
    options
        -e  --env  for .env file
    commands
        docker
            up
            down
            exec

        setup
            - setup the `.env` file for entire application bootstrap
            - if setup not run already, only show this option and return 
            - "no setup preset" in other commands

        config [key]
            - return config[key] or set config[key]

        php 
            -> docker exec php

        ?artisan
            - when laravel installed
            -> docker exec php artisan
            

*/

console.log('starting: ....', "\n");

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

yargs(process.argv.slice(2))
    .scriptName('viktor')
    .usage('$0 <cmd> [args]')
    .command(
        'setup', 'setup victor project',
        (yargs) => {},
        async (argv) => {

            let enviroment = Object.assign({
              '# viktor setup': '',
            }, await setupGuide());
            
            Object.keys(enviroment).forEach(key => {
                if(key.includes('INT_')) {
                    delete enviroment[key];
                }
            });

            console.log('----------------------------------------------');
            console.log('this is your configuratoin it will be stored');
            console.log('in <.env-directory> are these settings ok?');
            console.log(parseConfigToEnv(enviroment));
            
            const confirm = await confirmPrompt('Are thes Settings Ok?');

            if(!confirm) {
                console.log('TODO: not confirmed, start over or stop');
            }
            const envPath = './my-env1.env';
            writeSetupEnviromentFile(enviroment, envPath);
            
            console.log('----------------------------------------------');
            console.log('your .env file is setup at <env-path>, now run the container');
            console.log('now start the container.. `viktor docker up`');
        },
    )
    .command(
        'd [option]', 'interact with docker enviroment',
        () => {},
        (args) => {
            // TODO search for .env file
            console.log('[viktor interact with docker]', args);

            if(!args.option) {
                console.warn('no option set, use `up`, `down`, `exec`');
            }

            if(args.option === 'up') { new DockerComposeInteract().up();}
            if(args.option === 'down') { new DockerComposeInteract().down();}
            if(args.option === 'exec') { 
                args._.shift();
                console.log(args._);

                new DockerComposeInteract().exec(args._.join(' '));
            }
        },
    )

    .command(
      'hello [name]', 'welcome ter yargs!', 
      (yargs) => {
      yargs.positional('name', {
      type: 'string',
      default: 'Cambi',
      describe: 'the name to say hello to'
      });
      }, 
      (argv) => {
      console.log('hello', argv.name, 'welcome to yargs!')
      }
)
.help()
.argv