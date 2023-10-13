import inquirer from "inquirer";
import chalk from "chalk";

export async function userInput() {
  const { numCount } = await inquirer.prompt([
    {
      type: "number",
      name: "numCount",
      message: chalk.red(`How many inputs do you want to calculate:`),
      validate: (input: number) => {
        if (input <= 0 && isNaN(Number(input))) {
          return "Please enter a valid number";
        }
        return true;
      },
    },
  ]);

  const numbers: number[] = [];

  for (let i = 1; i <= numCount; i++) {
    const { number } = await inquirer.prompt([
      {
        type: "number",
        name: "number",
        message: chalk.blue(`Enter number ${i}`),
        validate: (input: number) => {
          if (input <= 0) {
            return "Please enter a valid number";
          }
          return true;
        },
      },
    ]);
    numbers.push(number);
  }
  return numbers;
}
