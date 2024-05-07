export class CliOption {
    title = 'default-cli';
    description = 'defualt-cli description';
    alias = [];
    builderCallback(yargs, helpOrVersionSet) {}
    handler(args) {}
    middlewares(argv) { return []; }
    deprecated = false;

    rawArgs(findString) {
        const dockerArgs = [...process.argv];
        dockerArgs.splice(0, process.argv.findIndex(a => a === findString) + 1);
        return dockerArgs;
    }
}