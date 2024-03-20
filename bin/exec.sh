#/!bin/bash

dockerFile=$(./viktor/bin/readenv.sh DC_DOCKERFILE ./viktor/.env)
dockerContainer=$(./viktor/bin/readenv.sh DC_CONTAINER ./viktor/.env);

command=$@

docker compose -f $dockerFile exec $dockerContainer $command