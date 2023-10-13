#! usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
import { userInput } from "./getUserInput.js";
import { performCalculation } from "./performCalculation.js";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function welcome() {
  let greetings = chalkAnimation.rainbow("Lets Start The Calculator");
  await sleep();
  greetings.stop();
  console.log(
    chalk.cyan(
      `
    |  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |F
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
    `
    )
  );
}
await welcome();

async function main() {
  async function startAgain() {
    do {
      const numbers = await userInput();
      await performCalculation(numbers);
      var again = await inquirer.prompt([
        {
          type: "input",
          name: "restart",
          message: chalk.red("Do you want to continue? Press y or no:"),
        },
      ]);
    } while (
      again.restart == "y" ||
      again.restart == "Y" ||
      again.restart == "yes" ||
      again.restart == "YES"
    );
  }
  startAgain();
}
main();
