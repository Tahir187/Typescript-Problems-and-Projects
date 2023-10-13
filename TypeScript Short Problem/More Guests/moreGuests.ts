
let guestList: string[] = ['Asad', 'Tariq', 'Yaseen'];

for(const guest of guestList){
    console.log(`${guest} would you like to come on dinner today night?`);
}

console.log("\n There will be some more guest in today dinner");

guestList.unshift("Tahir");
guestList.splice(2, 0 ,"Mansoor");
guestList = append(guestList, "Mudabir")

console.log("\n New guest list");
for(const guest of guestList){
    console.log(`${guest} would you like to come on dinner today night?`)
}

function append(guestList:string[], guest:string):string[]{
    guestList = [...guestList, guest];
    return guestList;
}

