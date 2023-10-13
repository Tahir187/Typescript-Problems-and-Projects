import chalk from "chalk";
import inquirer from "inquirer";

export async function performCalculation(numbers: number[]) {
  if (numbers.length === 0) {
    console.log("No numbers entered existing...");
    return;
  }

  await inquirer
    .prompt([
      {
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
      },
    ])
    .then((answers) => {
      if (answers.operator == "Addition") {
        const addition = numbers.reduce((acc, curr) => acc + curr);
        console.log(chalk.green(`Addition: ${addition}`));
      } else if (answers.operator == "Subtraction") {
        const subtraction = numbers.reduce((acc, curr) => acc - curr);
        console.log(chalk.green(`Subtraction is: ${subtraction}`));
      } else if (answers.operator == "Multiplication") {
        const product = numbers.reduce((acc, curr) => acc * curr);
        console.log(chalk.green(`Product: ${product}`));
      } else if (answers.operator == "Division") {
        const division = numbers.reduce((acc, curr) => acc / curr);
        console.log(chalk.green(`Division: ${division.toFixed(2)}`));
      }
    });
}
