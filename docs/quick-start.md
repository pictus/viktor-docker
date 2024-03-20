## Quick Start

To get started, create a `.env` file for our setup and toolsets. You can simply copy the `example.env` and use it as a template. 
The only thing you'll need to add are the 🔑 keys for Mercure: `DC_MERCURE_PUBLISHER_JWT_KEY` and `DC_MERCURE_SUBSCRIBER_JWT_KEY`. 

Once you've got your `.env` file ready, fire up the container with `docker compose up -d`. Open up your web browser using https and the port you've assigned under `DC_SERVER_PORT_SECURE`. 🌐

Next, you might encounter an error because we need to create an index.php file. No worries, just run:

```bash
mkdir public
echo "<?php phpinfo();" > public/index.php
```

Now, refresh your browser, and you should see the PHP info page. ✨

But wait, there's more! FrankenPHP Project (Viktor) is designed to be your constant companion. Utilize it in [submodule](submodule.md) mode and unlock its full potential! 🧙‍♂️

