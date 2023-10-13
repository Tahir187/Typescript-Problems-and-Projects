
const make_shirt =(size: string = "Large", message: string = "I love TypeScript"):string =>{
    return(`Shirt size is ${size}, ${message}`);
}

console.log(make_shirt());
console.log(make_shirt("medium"));
console.log(make_shirt("small"));