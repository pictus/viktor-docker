```


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

```


Welcome to `viktor-docker`, a quickstarter for [FrankenPHP](https://frankenphp.dev) for your next amazing project. It takes away the tedious work of setting up Docker and saves you time. Simply include this repository in your project and start working on your amazing idea.

- 🐳 Easy Docker setup for PHP projects
- ⏰ Saves time by providing helpful utilities
- 📦 Based on the original [FrankenPHP](https://hub.docker.com/r/dunglas/frankenphp#!) image 
- 🚀 mercure.hub setup included

This project is a work in progress (WIP)🚧. More tools, features, and production containers are coming in the future. ✨ Stay tuned for exciting updates! 🛠️
At this point, it's primarily intended as a developer setup. Get ready to unleash your creativity and productivity with FrankenPHP Project (Viktor)! 💻✨

### Getting Started

To get started with `viktor-docker`, follow these simple steps:

- ~~download the repo~~ 
- ~~create `.env`~~
- ~~`docker-compose up -d`~~
- ~~start your amazing idea~~~

__*update:*__ please see [Use as Submodule](/docs/submodule.md), for the best experience.


### But wait, there is more

- [Quick Start](/docs/quick-start.md)
- [Use as Submodule](/docs/submodule.md)
- [install Laravel](/docs/laravel.md)
- [install BroadCasting for Laravel](/docs/laravel-broadcasting.md)
- [more Tools](/docs/tools.md)


### Next Steps

- 💻 Building a CLI: Say Goodbye to Lengthy Bash Lines
- 🔧 Custom Build Options: packages, php extension
- 🌐 Caddy Setup: Custom extension and Caddyfile