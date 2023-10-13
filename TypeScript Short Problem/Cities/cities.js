function describe_city(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    return ("".concat(city, " is in ").concat(country));
}
console.log(describe_city());
console.log(describe_city("New York", "USA"));
console.log(describe_city("Istanbul", "Turkey"));
