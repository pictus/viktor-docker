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