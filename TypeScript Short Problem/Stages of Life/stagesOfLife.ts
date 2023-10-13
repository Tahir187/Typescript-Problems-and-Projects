
let person_age: number = 22;

if(person_age < 2){
    console.log("The person is baby");
}
else if(person_age >= 2 && person_age < 4){
    console.log("Person is toddler")
}
else if(person_age >= 4 && person_age < 13){
    console.log("Person is kid")
}
else if (person_age >= 13 && person_age < 20){
    console.log("Person is teenager");
}
else if(person_age >= 20 && person_age < 65){
    console.log("Person is adult");
}
else{
    console.log("Person is elder");
}