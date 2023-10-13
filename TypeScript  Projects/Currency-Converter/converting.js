import inquirer from "inquirer";
import chalk from "chalk";
export async function currencyConvert() {
    // Choose the currency you want to convert
    let chCurrency = await inquirer.prompt([
        {
            type: "list",
            name: "currency",
            message: chalk.red("Choose your currency"),
            choices: ["USD", "KWD", "SAR", "PKR", "INR"],
        },
        {
            type: "input",
            name: "amount",
            message: chalk.green("enter the amount you want to convert"),
            validate: (input) => {
                if (isNaN(Number(input))) {
                    return chalk.red("Enter the vaild amount");
                }
                return true;
            },
        },
    ]);
    // Choose the currency in which you want to convert
    let chConvert = await inquirer.prompt([
        {
            type: "list",
            name: "convert",
            message: chalk.blue("Choose the currency in which you want to convert"),
            choices: ["USD", "KWD", "SAR", "PKR", "INR"],
        },
    ]);
    function converting() {
        // converting currency based on inputs
        let answer = 0;
        // usd to other
        if (chCurrency.currency == "USD" && chConvert.convert == "INR") {
            answer = chCurrency.amount * 83.21;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "USD" && chConvert.convert == "PKR") {
            answer = chCurrency.amount * 294.77;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "USD" && chConvert.convert == "SAR") {
            answer = chCurrency.amount * 3.75;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "USD" && chConvert.convert == "KWD") {
            answer = chCurrency.amount * 0.31;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "USD" && chConvert.convert == "USD") {
            answer = chCurrency.amount * 1;
            console.log(chalk.green(answer.toFixed(2)));
        }
        // KWD to other
        if (chCurrency.currency == "KWD" && chConvert.convert == "INR") {
            answer = chCurrency.amount * 269.7;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "KWD" && chConvert.convert == "PKR") {
            answer = chCurrency.amount * 954.64;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "KWD" && chConvert.convert == "SAR") {
            answer = chCurrency.amount * 12.15;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "KWD" && chConvert.convert == "KWD") {
            answer = chCurrency.amount * 1;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "KWD" && chConvert.convert == "USD") {
            answer = chCurrency.amount * 3.24;
            console.log(chalk.green(answer.toFixed(2)));
        }
        // SAR to other
        if (chCurrency.currency == "SAR" && chConvert.convert == "INR") {
            answer = chCurrency.amount * 22.2;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "SAR" && chConvert.convert == "PKR") {
            answer = chCurrency.amount * 78.58;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "SAR" && chConvert.convert == "SAR") {
            answer = chCurrency.amount * 1;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "SAR" && chConvert.convert == "KWD") {
            answer = chCurrency.amount * 0.082;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "SAR" && chConvert.convert == "USD") {
            answer = chCurrency.amount * 0.27;
            console.log(chalk.green(answer.toFixed(2)));
        }
        // PKR to other
        if (chCurrency.currency == "PKR" && chConvert.convert == "INR") {
            answer = chCurrency.amount * 0.28;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "PKR" && chConvert.convert == "PKR") {
            answer = chCurrency.amount * 1;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "PKR" && chConvert.convert == "SAR") {
            answer = chCurrency.amount * 0.013;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "PKR" && chConvert.convert == "KWD") {
            answer = chCurrency.amount * 0.001;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "PKR" && chConvert.convert == "USD") {
            answer = chCurrency.amount * 0.0034;
            console.log(chalk.green(answer.toFixed(2)));
        }
        // INR to other
        if (chCurrency.currency == "INR" && chConvert.convert == "INR") {
            answer = chCurrency.amount * 1;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "INR" && chConvert.convert == "PKR") {
            answer = chCurrency.amount * 3.56;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "INR" && chConvert.convert == "SAR") {
            answer = chCurrency.amount * 0.045;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "INR" && chConvert.convert == "KWD") {
            answer = chCurrency.amount * 0.0037;
            console.log(chalk.green(answer.toFixed(2)));
        }
        else if (chCurrency.currency == "INR" && chConvert.convert == "USD") {
            answer = chCurrency.amount * 0.012;
            console.log(chalk.green(answer.toFixed(2)));
        }
    }
    converting();
}
