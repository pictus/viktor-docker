import { rawArgs } from "../prompt/utils.js";

export class CliOption {
    title = 'default-cli';
    description = 'defualt-cli description';
    alias = [];
    builderCallback(yargs, helpOrVersionSet) {}
    handler(args) {}
    middlewares(argv) { return []; }
    deprecated = false;

    rawArgs(findString, withFollowing = true) {
        return rawArgs(findString, withFollowing);
    }
}