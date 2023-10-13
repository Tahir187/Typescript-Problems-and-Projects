
const current_users: string[] = ['Tahir', 'Asad', 'Tariq', 'Yaseen', 'Mudabir'];
const new_users: string[] = ['Bob', 'Joe', 'Herry', 'Tariq', 'Asad'];

for(let new_user of new_users){
    let usernameAvaliable = true;

    for(let current_user of current_users){
        if(new_user.toLowerCase() === current_user.toLowerCase()){
            usernameAvaliable = false;
            break;
        }
    }

    if(usernameAvaliable){
        console.log(`Username ${new_user} is available`)
    }
    else{
        console.log(`Username ${new_user} is already taken. Please enter new username`)
    }

}