
const magiciansName:string[] = ["Gogo", "Pogo", "Mogebo"];

function show_magician(magiciansName: string[]):(() => void) {
     return function make_great(){
        for(const magician of magiciansName){
            console.log(`The Great ${magician} magician`);
        }
    }
}

const make_great = show_magician(magiciansName)
make_great()