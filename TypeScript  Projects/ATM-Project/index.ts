import chalkAnimation from "chalk-animation";
import { userID, userPIN } from "./userIDandPin.js";
import { getUserInput } from "./userInput.js";
import { atmFunctionality } from "./atmFunctionality.js";
import inquirer from "inquirer";
import chalk from "chalk";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function welcome() {
  let greetings = chalkAnimation.rainbow("Welcome the ATM Machine");
  await sleep();
  greetings.stop();
}
await welcome();

async function main() {
  console.log(chalk.blue("Please login your self to use our service"));
  const userInput = await getUserInput();
  async function restart() {
    do {
      if (userInput.userId === userID && userInput.userPin === userPIN) {
        console.log(chalk.green("You have successfully login"));
        await atmFunctionality();
      } else {
        console.log(chalk.red("Authentication failed! please try again"));
        return;
      }
      var playAgain = await inquirer.prompt([
        {
          type: "input",
          name: "restart",
          message: chalk.blue("Would you like to use ATM again:"),
        },
      ]);
    } while (
      playAgain.restart == "y" ||
      playAgain.restart == "Y" ||
      playAgain.restart == "yes" ||
      playAgain.restart == "YESS"
    );
  }
  restart();
}
main();
