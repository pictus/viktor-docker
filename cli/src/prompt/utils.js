import inquirer from 'inquirer';

export async function confirmPrompt(message, defaultSetting = 'yes') {

    const prompt = await inquirer.prompt([{
        type: 'list',
        name: 'confirmed',
        default: defaultSetting,
        choices: ['yes', 'no'],
        message: message,
        filter(val) {
            return val === 'yes'; 
        }
    }]);

    return prompt.confirmed;
}