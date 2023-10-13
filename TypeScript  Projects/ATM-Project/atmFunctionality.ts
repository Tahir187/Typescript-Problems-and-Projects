import inquirer from "inquirer";
import chalk from "chalk";

export async function atmFunctionality() {
  let initialAmount: number = 10000;
  const question = await inquirer.prompt([
    {
      name: "choose",
      message: chalk.red("What you want to do"),
      type: "list",
      choices: ["Debit", "Credit", "Check Amount"],
    },
  ]);
  if (question.choose == "Debit") {
    const debit = await inquirer.prompt([
      {
        type: "number",
        name: "amount",
        message: chalk.blue("Enter the amount that you want to debit:"),
        validate: (input) => {
          if (isNaN(Number(input))) {
            return chalk.red("Enter the valid amount");
          }
          return true;
        },
      },
    ]);
    console.log(chalk.green(`Amout after debit is: ${initialAmount + debit.amount}`));
  } else if (question.choose == "Credit") {
    const credit = await inquirer.prompt([
      {
        type: "number",
        name: "amount",
        message: chalk.blue("Enter the amount that you want to credit:"),
        validate: (input) => {
          if (isNaN(Number(input))) {
            return chalk.red("Enter the valid amount");
          }
          return true;
        },
      },
    ]);
    console.log(chalk.green(`Amout after debit is: ${initialAmount - credit.amount}`));
  } else if (question.choose == "Check Amount") {
    console.log(chalk.green(`Your amount is ${initialAmount}`));
  }
}
