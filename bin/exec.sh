#!/usr/bin/env bash 

dockerFile=$(./.viktor/bin/readenv.sh DC_DOCKERFILE .env)
dockerContainer=$(./.viktor/bin/readenv.sh DC_CONTAINER .env);

command=$@

docker compose -f $dockerFile exec $dockerContainer $command