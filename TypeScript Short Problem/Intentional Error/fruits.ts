
const fruits: string[] = ['Apple', 'Banana', 'Orange'];

fruits.forEach((fruit, index)=>{
    console.log(`${index}: ${fruit}`);
})

// intentional error
// fruits.toUpperCase();