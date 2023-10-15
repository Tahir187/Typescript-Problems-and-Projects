import inquirer from 'inquirer';
import Student from './studendClass.js';
import chalkAnimation from "chalk-animation";
const students = [];
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    const greetings = chalkAnimation.rainbow("Welcome To Student Management System CLI App");
    await sleep();
    greetings.stop();
}
await welcome();
async function main() {
    while (true) {
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Select an action',
                choices: ['Add Student', 'Enroll Student', 'Pay Fees', 'Show Status', 'Exit'],
            },
        ]);
        switch (action) {
            case 'Add Student':
                const { studentName } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'studentName',
                        message: 'Enter the Student name',
                    },
                ]);
                const newStudent = new Student(studentName);
                students.push(newStudent);
                console.log(`Student ${newStudent.name} added with ID ${newStudent.studentID}`);
                break;
            case 'Enroll Student':
                const { enrollStudentName } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'enrollStudentName',
                        message: 'Enter Student name',
                    },
                ]);
                const { courseEnroll } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'courseEnroll',
                        message: 'Enter Course name.',
                    },
                ]);
                let studentEnroll = students.find((s) => s.name === enrollStudentName);
                if (!studentEnroll) {
                    console.log(`Student ${enrollStudentName} not found.`);
                }
                else {
                    studentEnroll.enroll(courseEnroll);
                }
                break;
            case 'Pay Fees':
                const { payFeesStudentName } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'payFeesStudentName',
                        message: 'Enter Student name',
                    },
                ]);
                let studentPay = students.find((s) => s.name === payFeesStudentName);
                if (!studentPay) {
                    console.log(`Student ${payFeesStudentName} not found.`);
                }
                else {
                    const { paymentAmount } = await inquirer.prompt([
                        {
                            type: 'number',
                            name: 'paymentAmount',
                            message: `Enter the amount to pay for ${studentPay.name}'s tuition.`,
                        },
                    ]);
                    studentPay.payFees(paymentAmount);
                }
                break;
            case 'Show Status':
                if (students.length === 0) {
                    console.log('No students to display');
                }
                else {
                    const { studentIndex } = await inquirer.prompt([
                        {
                            type: 'list',
                            name: 'studentIndex',
                            message: 'Select a student',
                            choices: students.map((student, index) => ({
                                name: `${student.name} (ID: ${student.studentID})`,
                                value: index,
                            })),
                        },
                    ]);
                    students[studentIndex].showStatus();
                }
                break;
            case 'Exit':
                console.log('Exiting...');
                return;
        }
    }
}
main();
