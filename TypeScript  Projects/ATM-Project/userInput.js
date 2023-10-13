import chalk from "chalk";
import inquirer from "inquirer";
export async function getUserInput() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "userId",
            message: chalk.blue("Please enter your provided user id here:"),
            validate: (input) => {
                if (typeof input !== "string") {
                    return chalk.red("Invalid user id enter valid user id");
                }
                return true;
            },
        },
        {
            type: "input",
            name: "userPin",
            message: chalk.blue("Please enter your provided user pin here:"),
            validate: (input) => {
                if (isNaN(Number(input))) {
                    return chalk.red("Enter the valid pin");
                }
                return true;
            },
        },
    ]);
    return {
        userId: answers.userId,
        userPin: answers.userPin,
    };
}
