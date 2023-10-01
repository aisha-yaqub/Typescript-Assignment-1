//    Name: Ayesha Yaqub
//    Date: 13-07-2023
//    Description: The program below strips white spaces in a string variable.

let person_name_with_whitespaces:string = ' \tMatt Adams \n';
console.log(person_name_with_whitespaces);

let person_name_with_whitespaces_removed:string = person_name_with_whitespaces.trim();
console.log(person_name_with_whitespaces_removed);