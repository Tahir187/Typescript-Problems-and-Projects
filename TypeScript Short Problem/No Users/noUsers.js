var userNames = ['Tahir', 'Asad', 'Admin', 'Tariq', 'Yaseen'];
userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
        var userName = userNames_1[_i];
        if (userName === "Admin") {
            console.log("Hello, ".concat(userName, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(userName, ", thank you for logging in again"));
        }
    }
}
