
const names: string[] = ['Asad', 'Tariq', 'Yaseen', 'Tahir'];
let greeting: string = "Hello";


for(const name of names){
    const message: string = `${greeting} ${name}! How are you today?`  
    console.log(`${message}`);
}