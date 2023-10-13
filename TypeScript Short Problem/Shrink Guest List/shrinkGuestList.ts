
const guestList: string[] = ['Asad', 'Tariq', 'Yaseen', 'Mudabir'];

for(const guest of guestList){
    console.log(guest);
}
console.log("I can invite only two people for dinner");

for(let i =guestList.length-1; i >= 0; i--){
    if(i > 1){
        console.log(`Sorry ${guestList[i]} you are not invited for today's dinner`)
        guestList.pop();
    }else{
        console.log(`${guestList[i]} you are still invited for today's dinner`)
        guestList.pop();
    }
}

console.log(guestList);