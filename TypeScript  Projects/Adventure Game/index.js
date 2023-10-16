import { Player, Opponent } from "./playerClass.js";
import inquirer from "inquirer";
import chalk from "chalk";
let player = await inquirer.prompt([
    {
        type: "input",
        name: "playerName",
        message: chalk.red("Enter your player name:")
    }
]);
let opponent = await inquirer.prompt([
    {
        type: "list",
        name: "opponentName",
        message: chalk.red("Select your opponent"),
        choices: ["Red Skull", "Zombie", "Assassian", "Thanos"]
    }
]);
let p1 = new Player(player.playerName);
let o1 = new Opponent(opponent.opponentName);
if (opponent.opponentName == "Red Skull") {
    console.log(`${chalk.bold.green(p1.playerName)} VS ${chalk.bold.red(o1.opponentName)}`);
}
