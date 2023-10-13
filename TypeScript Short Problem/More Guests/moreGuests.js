var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guestList = ['Asad', 'Tariq', 'Yaseen'];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("".concat(guest, " would you like to come on dinner today night?"));
}
console.log("\n There will be some more guest in today dinner");
guestList.unshift("Tahir");
guestList.splice(2, 0, "Mansoor");
guestList = append(guestList, "Mudabir");
console.log("\n New guest list");
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("".concat(guest, " would you like to come on dinner today night?"));
}
function append(guestList, guest) {
    guestList = __spreadArray(__spreadArray([], guestList, true), [guest], false);
    return guestList;
}
