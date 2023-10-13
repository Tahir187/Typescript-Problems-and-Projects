
const userNames: string[] = ['Tahir', 'Asad', 'Admin', 'Tariq', 'Yaseen'];

for(const userName of userNames){
    if(userName === "Admin"){
        console.log(`Hello, ${userName}, would you like to see a status report?`);
    }else{
        console.log(`Hello ${userName}, thank you for logging in again`);
    }
}