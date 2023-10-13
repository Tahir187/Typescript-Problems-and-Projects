
// tests for equality and inequality with strings
const str1: string = "A";
const str2: string = "B";

console.log('Tests for equality and inequality with strings')
str1 === str2? console.log("strings are equals.") : console.log("strings are not equals");

// tests using lower case function
let str3: string = "ASAD";
let str4: string = "asad";
let str5: string = "TARIQ";


console.log('\nTests using the lower case function')
str3.toLowerCase() === str4 ? console.log("Strings are equals") : console.log("Strings are not equal");
str4.toUpperCase() === str5 ? console.log("Strings are equals") : console.log("Strings are not equal");

// numerical equality and inequality

console.log("\nNumerical equality");
4 > 5 ? console.log(true) : console.log(false);
6 >= 6 ? console.log(true) : console.log(false);
3 < 4 ? console.log(true) : console.log(false);
2 <= 2 ? console.log(true) : console.log(false);
1 == 1 ? console.log(true) : console.log(false);