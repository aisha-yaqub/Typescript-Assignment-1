let personName:string = 'Ahmad ali khan';

console.log(`Name in lowercase: ${personName.toLowerCase()}`);
console.log(`Name in uppercase: ${personName.toUpperCase()}`);

// Converting person name to titlecase
let personNameSplit:string[] = personName.split(' ');

let titleCaseNames = personNameSplit.map(name => {

    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
});
console.log(`Name in titlecase: ${titleCaseNames.join(' ')}`);

