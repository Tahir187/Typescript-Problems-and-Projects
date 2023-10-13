// Name: Muhammad Tahir.
// Date: 08/07/2023
// This program will display name of person into 3 formats 1: Lower Case, 2: Upper Case and 3: Title Case

let fullName: string = "john Doe";
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
console.log(toTitleCase(fullName));


function toTitleCase(fullName:string){
        let words = fullName.split(' ');
        let titleCaseWords = words.map((word)=> word[0].toUpperCase() + word.slice(1))
        let titleCaseStr = titleCaseWords.join(' ');
        return titleCaseStr;
}