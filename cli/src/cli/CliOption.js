export class CliOption {
    title = 'default-cli';
    description = 'defualt-cli description';
    alias = [];
    builderCallback(yargs) {}
    handler(args) {}

    rawArgs(findString) {
        const dockerArgs = [...process.argv];
        dockerArgs.splice(0, process.argv.findIndex(a => a === findString) + 1);
        return dockerArgs;
    }
}