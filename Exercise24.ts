// Tests for equality and inequality with strings

let car:string = "Honda";
console.log("Is car == 'Honda'? I predict True.", car == 'Honda');
console.log("Is car != 'Honda'? I predict False.", car != 'Honda');

// Tests using the lower case function

console.log("Is car == 'honda'? I predict False.", car == car.toLowerCase());
console.log("Is car != 'honda'? I predict True.", car != car.toLowerCase());

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num:number = 9;
console.log("Is num == 9 ? I predict True.", num == 9);
console.log("Is num != 9 ? I predict False.", num != 9);
console.log("Is num > 5 ? I predict True.", num > 5);
console.log("Is num < 5  ? I predict False.", num < 5);
console.log("Is num >= 9  ? I predict True.", num >= 9);
console.log("Is num <= 6  ? I predict False.", num <= 6);

// Tests using "and" and "or" operators

console.log("Is num >= 6 && num <= 9  ? I predict True.", num >= 6 && num <= 9);
console.log("Is num <= 10 && num >= 20  ? I predict False.", num <= 10 && num >= 20);

console.log("Is num > 10 || num < 20  ? I predict True.", num > 10 || num < 20);
console.log("Is num < 3 || num > 9  ? I predict False.", num < 3 || num > 9);

//  Test whether an item is in a array

let countries: Array<string> = ["Pakistan", "Japan", "South Korea"];
console.log("Is countries includes 'Pakistan'? I predict True.", countries.includes("Pakistan"));
console.log("Is countries includes 'China'? I predict False.", countries.includes("China"));

// Test whether an item is not in a array

console.log("Is countries does not include 'Japan'? I predict False.", !countries.includes("Japan"));
console.log("Is countries does not include 'China'? I predict True.", !countries.includes("China"));