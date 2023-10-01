const languages:string[] = ['French', 'German', 'Dutch', 'English', 'Urdu'];

// Try to access an index that does not exist i.e., greater than array length

console.log(languages[5])    // It will return undefined

// To correct the error, check array length before accessing the index
const index = 3; // Change this to a valid index within the array length

if (index >= 0 && index < languages.length) {
    console.log(`Value at index ${index} is ${languages[index]}`);
} 
else {
  console.log(`Index value ${index} is not valid`);
}


