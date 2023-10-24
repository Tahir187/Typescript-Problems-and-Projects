import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function welcome() {
  let greetings = chalkAnimation.rainbow("Welcome To OOP Introduction");
  await sleep();
  greetings.stop();
}
await welcome();

class Student {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}
class Teacher {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

class Person {
  students: Student[] = [];
  teachers: Teacher[] = [];
  addStudent(obj: any) {
    this.students.push(obj);
  }
  addTeacher(obj: any) {
    this.teachers.push(obj);
  }
}

const persons = new Person();
console.log(persons);

const programStart = async (persons: Person) => {
  do {
    const ans = await inquirer.prompt([
      {
        type: "list",
        name: "select",
        message: "Whom do you like to talk",
        choices: ["Self", "Student", "Teacher", "Exit"],
      },
    ]);

    if (ans.select == "Self") {
      console.log("Hello self talking");
      console.log("What are you doing");
    }
    if (ans.select == "Student") {
      const ans = await inquirer.prompt([
        {
          type: "input",
          name: "student",
          message: "Which student you want to talk",
        },
      ]);

      const student = persons.students.find((val) => val.name == ans.student);

      if (!student) {
        const name = new Student(ans.student);
        persons.addStudent(name);
        console.log(`Hello I am ${name.name} and I am fine`);
        console.log(persons.students);
      }

      if (student) {
        console.log(`Hello I am ${student.name} and I am fine......`);
        console.log(persons.students);
      }
    }

    if (ans.select == "Teacher") {
      const ans = await inquirer.prompt([
        {
          type: "input",
          name: "teacher",
          message: "Which teacher you want to talk?",
        },
      ]);

      const teacher = persons.teachers.find((val) => val.name == ans.teacher);

      if (!teacher) {
        const name = new Teacher(ans.teacher);
        persons.addTeacher(name);
        console.log(`Hello I am ${name.name} and I am fine`);
        console.log(persons.teachers);
      }

      if (teacher) {
        console.log(`Hello I am ${teacher.name} and I am fine......`);
        console.log(persons.students);
      }
    }
    if(ans.select == "Exit"){
        process.exit();
    }
  } while (true);
};

programStart(persons);
