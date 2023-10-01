let personName = 'Ahmad ali khan';
console.log(`Name in lowercase: ${personName.toLowerCase()}`);
console.log(`Name in uppercase: ${personName.toUpperCase()}`);
// Converting person name to titlecase
let personNameSplit = personName.split(' ');
let titleCaseNames = personNameSplit.map(name => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
});
console.log(`Name in titlecase: ${titleCaseNames.join(' ')}`);
export {};
