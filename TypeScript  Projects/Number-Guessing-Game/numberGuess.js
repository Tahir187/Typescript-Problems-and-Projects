import inquirer from "inquirer";
import chalk from "chalk";
export async function numberGuessingGame() {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    const maxAttempts = 5;
    let attempts = 0;
    console.log(chalk.blue(`You have ${maxAttempts} life line to guess the number`));
    const plyGame = async () => {
        if (attempts >= maxAttempts) {
            console.log(chalk.red("You have used your all life lines"));
            return;
        }
        const guessNumber = await inquirer.prompt([
            {
                type: "number",
                name: "guess",
                message: chalk.green(`Attempt ${attempts + 1} (1-100):`),
                validate: (input) => {
                    if (isNaN(Number(input)) || input < 1 || input > 100) {
                        return "Enter the Valid Number between 1-100";
                    }
                    return true;
                },
            },
        ]);
        attempts++;
        if (guessNumber.guess > randomNumber) {
            console.log(chalk.blue(`Think less number then ${guessNumber.guess}.`));
        }
        else if (guessNumber.guess < randomNumber) {
            console.log(chalk.blue(`Think greater number then ${guessNumber.guess}.`));
        }
        else if (guessNumber.guess === randomNumber) {
            console.log(chalk.green(`You win the number is ${randomNumber}.`));
            return;
        }
        else {
            console.log(chalk.red(`You lose the number is ${randomNumber}, Play again.`));
        }
        await plyGame();
    };
    await plyGame();
}
