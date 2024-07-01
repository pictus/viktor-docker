import inquirer from 'inquirer';

export function promptObject(name, message, defaultSetting = 'yes', asNumber = false) {
    return {
        type: 'list',
        name,
        default: defaultSetting,
        choices: ['yes', 'no'],
        message: message,
        filter(val) {
            if(asNumber) {
                return val === 'yes' ? 1 : 0;
            }
            return val === 'yes'; 
        }
    }
}

export async function confirmPrompt(message, defaultSetting = 'yes') {
    const prompt = await inquirer.prompt([promptObject('confirmed', message, defaultSetting)]);
    return prompt.confirmed;
}

export function rawArgs(findString, withFollowing = false) {
    const args = [...process.argv];
    let remember = undefined;

    return args.map(((a, i) => {
        if(remember !== undefined) {
            if(!withFollowing) {
                remember = undefined;
            }
            return a;
        } 
        
        if(a === findString) { remember = i; }

        return false;
    })).filter(a => a);
}
