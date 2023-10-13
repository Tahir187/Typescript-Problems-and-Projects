import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function welcome() {
  let greetings = chalkAnimation.rainbow("Welcome to TODO App");
  await sleep();
  greetings.stop();
}
await welcome();

async function todoList() {
  let todos: string[] = [];
  let loop = true;

  do {
    const answers: {
      TODO: string;
      addMore: boolean;
    } = await inquirer.prompt([
      {
        type: "input",
        name: "TODO",
        message: "What you want to add:",
      },
      {
        type: "confirm",
        name: "addMore",
        message: "Do you want to add more:",
        default: false,
      },
    ]);

    const { TODO, addMore } = answers;
    loop = addMore;
    if (TODO) {
      todos.push(TODO);
    } else {
      console.log("Please add valid input");
    }
  } while (loop);

  if (todos.length > 0) {
    todos.forEach((todo) => {
      console.log(todo);
    });
  } else {
    console.log("No todos found");
  }
}
todoList();
