export default class Student {
    studentID;
    name;
    courses;
    balance;
    constructor(name) {
        this.studentID = this.generateStudentID();
        this.name = name;
        this.courses = [];
        this.balance = 10000;
    }
    generateStudentID(length = 5) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let studentID = '';
        for (let i = 0; i < length; i++) {
            studentID += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return studentID;
    }
    enroll(course) {
        if (this.courses.includes(course)) {
            console.log(`${this.name} is already enrolled in ${course}.`);
            return;
        }
        this.courses.push(course);
        console.log(`${this.name} is enrolled in ${course}.`);
    }
    payFees(amount) {
        if (amount <= 0) {
            console.log('Invalid payment amount.');
            return;
        }
        if (amount > this.balance) {
            console.log('Insufficient balance, payment not processed.');
            return;
        }
        this.balance -= amount;
        console.log(`Paid $${amount} in tuition fees. Remaining balance: $${this.balance}`);
    }
    showStatus() {
        console.log('Student Details');
        console.log('-------------------------');
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Student name: ${this.name}`);
        console.log('Courses Enrolled:');
        this.courses.forEach((course) => {
            console.log(`- ${course}`);
        });
        console.log(`Balance: $${this.balance}`);
    }
}
