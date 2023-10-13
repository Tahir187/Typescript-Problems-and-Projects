var current_users = ['Tahir', 'Asad', 'Tariq', 'Yaseen', 'Mudabir'];
var new_users = ['Bob', 'Joe', 'Herry', 'Tariq', 'Asad'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var usernameAvaliable = true;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_user = current_users_1[_a];
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            usernameAvaliable = false;
            break;
        }
    }
    if (usernameAvaliable) {
        console.log("Username ".concat(new_user, " is available"));
    }
    else {
        console.log("Username ".concat(new_user, " is already taken. Please enter new username"));
    }
}
