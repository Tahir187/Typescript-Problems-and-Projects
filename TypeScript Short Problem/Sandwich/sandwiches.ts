
function makeSandwich(items: string[]): void{
    const summary = `You ordered a sandwich with: ${items.join()}`;

    console.log(summary);
}

makeSandwich(['sauss', 'butter']);
makeSandwich(['sauss', 'Cheeze', 'KatchUP']);
makeSandwich(['sauss', 'butter', 'nut', 'elaechi']);