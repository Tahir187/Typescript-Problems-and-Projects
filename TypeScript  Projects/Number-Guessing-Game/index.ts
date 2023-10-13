import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { numberGuessingGame } from "./numberGuess.js";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function welcome() {
  let greetings = chalkAnimation.rainbow("The Number Guessing Game");
  await sleep();
  greetings.stop();
}
await welcome();

async function main() {
  async function startAgan() {
    do {
      await numberGuessingGame();
      var restart = await inquirer.prompt([
        {
          type: "input",
          name: "playAgain",
          message: "Wanna play again! y/n",
        },
      ]);
    } while (
      restart.playAgain == "y" ||
      restart.playAgain == "Y" ||
      restart.playAgain == "yes" ||
      restart.playAgain == "YESS"
    );
  }
  startAgan();
}
main();
