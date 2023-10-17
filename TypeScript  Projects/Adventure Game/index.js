import { Player, Opponent } from "./playerClass.js";
import inquirer from "inquirer";
import chalk from "chalk";
let player = await inquirer.prompt([
    {
        type: "input",
        name: "playerName",
        message: chalk.red("Enter your player name:"),
    },
]);
let opponent = await inquirer.prompt([
    {
        type: "list",
        name: "opponentName",
        message: chalk.red("Select your opponent"),
        choices: ["Red Skull", "Zombie", "Assassian", "Thanos"],
    },
]);
let p1 = new Player(player.playerName);
let o1 = new Opponent(opponent.opponentName);
do {
    if (opponent.opponentName == "Red Skull") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: chalk.red("Select your option"),
                choices: ["Attack", "Drink Portion", "Quit Game"],
            },
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            console.log(num);
            if (num > 0) {
                o1.healthDecrease();
                console.log(chalk.bold.red(`${o1.opponentName} health is ${o1.health}`));
                console.log(chalk.bold.green(`${p1.playerName} health is ${p1.health}`));
                if (o1.health <= 0) {
                    console.log(chalk.bold.italic.green(`${p1.playerName} has won the match`));
                    process.exit();
                }
            }
            if (num <= 0) {
                p1.healthDecrease();
                console.log(chalk.bold.red(`${p1.playerName} health is ${p1.health}`));
                console.log(chalk.bold.green(`${o1.opponentName} health is ${o1.health}`));
                if (p1.health <= 0) {
                    console.log(chalk.bold.italic.red(`${p1.playerName} has loose the match`));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.healthIncrease();
            console.log(chalk.bold.green(`Your health is ${p1.health}`));
        }
        if (ask.opt === "Quit Game") {
            console.log(chalk.blue("Thanks for playing come next and have adventure"));
            process.exit();
        }
    }
    // Zombie
    if (opponent.opponentName == "Zombie") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: chalk.red("Select your option"),
                choices: ["Attack", "Drink Portion", "Quit Game"],
            },
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            console.log(num);
            if (num > 0) {
                o1.healthDecrease();
                console.log(chalk.bold.red(`${o1.opponentName} health is ${o1.health}`));
                console.log(chalk.bold.green(`${p1.playerName} health is ${p1.health}`));
                if (o1.health <= 0) {
                    console.log(chalk.bold.italic.green(`${p1.playerName} has won the match`));
                    process.exit();
                }
            }
            if (num <= 0) {
                p1.healthDecrease();
                console.log(chalk.bold.red(`${p1.playerName} health is ${p1.health}`));
                console.log(chalk.bold.green(`${o1.opponentName} health is ${o1.health}`));
                if (p1.health <= 0) {
                    console.log(chalk.bold.italic.red(`${p1.playerName} has loose the match`));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.healthIncrease();
            console.log(chalk.bold.green(`Your health is ${p1.health}`));
        }
        if (ask.opt === "Quit Game") {
            console.log(chalk.blue("Thanks for playing come next and have adventure"));
            process.exit();
        }
    }
    // Assassian
    if (opponent.opponentName == "Assassian") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: chalk.red("Select your option"),
                choices: ["Attack", "Drink Portion", "Quit Game"],
            },
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            console.log(num);
            if (num > 0) {
                o1.healthDecrease();
                console.log(chalk.bold.red(`${o1.opponentName} health is ${o1.health}`));
                console.log(chalk.bold.green(`${p1.playerName} health is ${p1.health}`));
                if (o1.health <= 0) {
                    console.log(chalk.bold.italic.green(`${p1.playerName} has won the match`));
                    process.exit();
                }
            }
            if (num <= 0) {
                p1.healthDecrease();
                console.log(chalk.bold.red(`${p1.playerName} health is ${p1.health}`));
                console.log(chalk.bold.green(`${o1.opponentName} health is ${o1.health}`));
                if (p1.health <= 0) {
                    console.log(chalk.bold.italic.red(`${p1.playerName} has loose the match`));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.healthIncrease();
            console.log(chalk.bold.green(`Your health is ${p1.health}`));
        }
        if (ask.opt === "Quit Game") {
            console.log(chalk.blue("Thanks for playing come next and have adventure"));
            process.exit();
        }
    }
    // Thanos
    if (opponent.opponentName == "Thoans") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: chalk.red("Select your option"),
                choices: ["Attack", "Drink Portion", "Quit Game"],
            },
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            console.log(num);
            if (num > 0) {
                o1.healthDecrease();
                console.log(chalk.bold.red(`${o1.opponentName} health is ${o1.health}`));
                console.log(chalk.bold.green(`${p1.playerName} health is ${p1.health}`));
                if (o1.health <= 0) {
                    console.log(chalk.bold.italic.green(`${p1.playerName} has won the match`));
                    process.exit();
                }
            }
            if (num <= 0) {
                p1.healthDecrease();
                console.log(chalk.bold.red(`${p1.playerName} health is ${p1.health}`));
                console.log(chalk.bold.green(`${o1.opponentName} health is ${o1.health}`));
                if (p1.health <= 0) {
                    console.log(chalk.bold.italic.red(`${p1.playerName} has loose the match`));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.healthIncrease();
            console.log(chalk.bold.green(`Your health is ${p1.health}`));
        }
        if (ask.opt === "Quit Game") {
            console.log(chalk.blue("Thanks for playing come next and have adventure"));
            process.exit();
        }
    }
} while (true);
