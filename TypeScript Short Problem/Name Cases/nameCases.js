// Name: Muhammad Tahir.
// Date: 08/07/2023
// This program will display name of person into 3 formats 1: Lower Case, 2: Upper Case and 3: Title Case
var fullName = "john Doe";
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
console.log(toTitleCase(fullName));
function toTitleCase(fullName) {
    var words = fullName.split(' ');
    var titleCaseWords = words.map(function (word) { return word[0].toUpperCase() + word.slice(1); });
    var titleCaseStr = titleCaseWords.join(' ');
    return titleCaseStr;
}
