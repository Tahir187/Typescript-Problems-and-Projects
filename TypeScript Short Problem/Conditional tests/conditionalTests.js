var firstName = 'John';
var lastName = "Doe";
var fullName = firstName + ' ' + lastName;
if (fullName === "John Doe") {
    console.log(true);
}
else {
    console.log(false);
}
console.log("Is ".concat(fullName, " === 'John Doe' ? | predict True"));
console.log(fullName === "John Doe");
