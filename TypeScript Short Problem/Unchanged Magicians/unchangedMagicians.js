var magiciansName = ['Pogo', 'Mogo', 'Mogebo'];
function show_magician(magiciansName) {
    for (var i = 0; i < magiciansName.length; i++) {
        magiciansName[i] = "The Great ".concat(magiciansName[i], " magician");
    }
}
var modifiedArray = magiciansName.slice();
show_magician(modifiedArray);
console.log(magiciansName);
console.log(modifiedArray);
