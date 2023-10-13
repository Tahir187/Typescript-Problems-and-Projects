// Name: Muhammad Tahir.
// Date: 08/07/2023
// This program will display name of person with message.


let firstName: string = "John Doe";
firstName = "Tahir"
console.log(`Hello ${firstName}, would you like to learn some TypeScript today?`)

// we can infer but throws an error while reassigning
// let str =  'jhn';
// str = 23

// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
// let json = JSON.parse("55");
// json = 23
// Most expect json to be an object, but it can be a string or a number like this example
// console.log(typeof json);


// let a = 'tariq';
// console.log(Math.sqrt(a))