var guestList = ['Asad', 'Tariq', 'Yaseen'];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("".concat(guest, " would you like to come on dinner today?"));
}
var unavailableGuest = guestList.pop();
console.log("".concat(unavailableGuest, " can't make it to dinner today"));
guestList.push("Tahir");
console.log("\nNew list of guests.");
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("".concat(guest, " would you like to come on dinner today?"));
}
