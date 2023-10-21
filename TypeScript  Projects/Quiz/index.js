import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const apiLink = "https://opentdb.com/api.php?amount=6&category=18&difficulty=easy&type=multiple";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let greetings = chalkAnimation.rainbow("Welcome To Quiz Game");
    await sleep();
    greetings.stop();
}
await welcome();
let fetchData = async (data) => {
    let fetchQuiz = await fetch(data);
    let res = await fetchQuiz.json();
    return res.results;
};
let data = await fetchData(apiLink);
let startQuiz = async () => {
    let score = 0;
    // for user name
    let name = await inquirer.prompt([
        {
            type: "input",
            name: "fname",
            message: chalk.red("Enter your name for quiz"),
        }
    ]);
    for (let i = 1; i <= 5; i++) {
        let answers = [...data[i].incorrect_answers, data[i].correct_answer];
        let ans = await inquirer.prompt([
            {
                type: "list",
                name: 'quiz',
                message: chalk.red(`${data[i].question}`),
                choices: answers.map((val) => val),
            }
        ]);
        if (ans.quiz == data[i].correct_answer) {
            ++score;
            console.log(chalk.bold.italic.blue(`Correct`));
        }
        else {
            console.log(`Correct answer is ${chalk.bold.italic.red(`${data[i].correct_answer}`)}`);
        }
    }
    console.log(`Dear ${chalk.green.bold(name.fname)}, your score is ${chalk.green(score)} out of ${chalk.red('5')}`);
};
startQuiz();
