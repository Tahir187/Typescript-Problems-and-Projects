
let names: string[] = ['Asad', 'Tariq', 'Yaseen', 'Tahir'];

// first method 
for(let i = 0; i<names.length; i++){
    console.log(names[i]);
}

// second method
for(const name of names){
    console.log(name)
}