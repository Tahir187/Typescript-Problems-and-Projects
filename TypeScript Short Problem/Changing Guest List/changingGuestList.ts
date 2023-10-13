const guestList: string[] = ['Asad', 'Tariq', 'Yaseen'];

for(const guest of guestList){
    console.log(`${guest} would you like to come on dinner today?`);
}

const unavailableGuest: string = guestList.pop();
console.log(`${unavailableGuest} can't make it to dinner today`)

guestList.push("Tahir")
console.log("\nNew list of guests.")
for(const guest of guestList){
    console.log(`${guest} would you like to come on dinner today?`)
}