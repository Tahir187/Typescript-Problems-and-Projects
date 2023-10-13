
function describe_city(city: string = "Karachi", country: string = "Pakistan"):string{
    return (`${city} is in ${country}`);
}

console.log(describe_city());
console.log(describe_city("New York", "USA"));
console.log(describe_city("Istanbul", "Turkey"))