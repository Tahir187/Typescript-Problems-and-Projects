
const magiciansName: string[] = ['Pogo', 'Mogo','Mogebo'];

function show_magician(magiciansName: string[]): void{
    for(let i = 0; i<magiciansName.length; i++){
        magiciansName[i] = `The Great ${magiciansName[i]} magician`;
    }
}

const modifiedArray = magiciansName.slice();
show_magician(modifiedArray);

console.log(magiciansName);
console.log(modifiedArray);