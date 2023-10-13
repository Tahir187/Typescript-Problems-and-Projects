import chalkAnimation from "chalk-animation";
import { currencyConvert } from "./converting.js";
import inquirer from "inquirer";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    const greetings = chalkAnimation.rainbow("Currency Converter CLI App");
    await sleep();
    greetings.stop();
}
await welcome();
async function main() {
    async function restart() {
        do {
            await currencyConvert();
            var startAgain = await inquirer.prompt([
                {
                    type: "input",
                    name: "restart",
                    message: "would you like start again currency convert",
                },
            ]);
        } while (startAgain.restart == "y" ||
            startAgain.restart == "Y" ||
            startAgain.restart == "yes" ||
            startAgain.restart == "YES");
    }
    restart();
}
main();
