#!/bin/bash

# this file is reading config values from config.txt / .env file
# format file is:
# param=value

entry=$(grep "$1" "$2")
IFS='=' read -r -a CFG <<< "$entry"
echo "${CFG[1]}"
