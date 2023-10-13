var magiciansName = ["Gogo", "Pogo", "Mogebo"];
function show_magician(magiciansName) {
    return function make_great() {
        for (var _i = 0, magiciansName_1 = magiciansName; _i < magiciansName_1.length; _i++) {
            var magician = magiciansName_1[_i];
            console.log("The Great ".concat(magician, " magician"));
        }
    };
}
var make_great = show_magician(magiciansName);
make_great();
