
let userNames: string[] = ['Tahir', 'Asad', 'Admin', 'Tariq', 'Yaseen'];

userNames = [];

if(userNames.length === 0 ){
    console.log("We need to find some users!");
}
else{
    for(const userName of userNames){
        if(userName === "Admin"){
            console.log(`Hello, ${userName}, would you like to see a status report?`);
        }else{
            console.log(`Hello ${userName}, thank you for logging in again`);
        }
    }
}