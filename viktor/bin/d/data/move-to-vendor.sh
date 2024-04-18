#!/bin/bash

cd ../../../../
mkdir -p vendor_local/pictus
rm -rf vendor_local/pictus/livereaction
cp -r docker_repo/bin/d/data/laravel-livereaction vendor_local/pictus
ls vendor_local
ls vendor_local/pictus/