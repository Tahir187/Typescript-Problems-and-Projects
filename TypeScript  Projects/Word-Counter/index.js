import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    const greetings = chalkAnimation.rainbow("WORD Counter CLI App");
    await sleep();
    greetings.stop();
}
await welcome();
async function characterAndWordCounter() {
    const inputText = await inquirer.prompt([
        {
            type: "input",
            name: "text",
            message: "Please enter the text for counting Characters and words:"
        }
    ]);
    const userText = inputText.text;
    const textWithoutSpaces = userText.replace(/\s/g, "");
    const words = userText.split(/\s+/);
    const characterCount = textWithoutSpaces.length;
    const wordsCount = words.length;
    console.log(`Character without space are ${characterCount}`);
    console.log(`Words without space are ${wordsCount}`);
}
async function main() {
    async function restart() {
        do {
            await characterAndWordCounter();
            var startAgain = await inquirer.prompt([
                {
                    type: "input",
                    name: "restart",
                    message: "would you like start again",
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
