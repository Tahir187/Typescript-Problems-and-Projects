var guestList = ['Asad', 'Tariq', 'Yaseen', 'Mudabir'];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log(guest);
}
console.log("I can invite only two people for dinner");
for (var i = guestList.length - 1; i >= 0; i--) {
    if (i > 1) {
        console.log("Sorry ".concat(guestList[i], " you are not invited for today's dinner"));
        guestList.pop();
    }
    else {
        console.log("".concat(guestList[i], " you are still invited for today's dinner"));
        guestList.pop();
    }
}
console.log(guestList);
