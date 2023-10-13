import inquirer from "inquirer";
export async function atmLogin() {
    const userid = await inquirer.prompt([
        {
            type: "input",
            name: "userId",
            message: "Please enter your provided user id here:",
            validate: (input) => {
                if (typeof input !== "string") {
                    return "Invalid user id enter valid user id";
                }
                return true;
            }
        },
    ]);
    const userpin = await inquirer.prompt([
        {
            type: "input",
            name: "userPin",
            message: "Please enter your provided user pin here:",
            validate: (input) => {
                if (isNaN(Number(input))) {
                    return "Enter the valid pin";
                }
                return true;
            }
        }
    ]);
}
