let places_originals = ['K2 Base Camp', 'Amsterdam', 'Victoria Falls', 'Petra', 'Hawaii'];
// Original array
console.log("Original Order:", places_originals);
// Copy of the original places array
let places_sorted = places_originals.slice();
// Sorted array in alphabetical order
places_sorted.sort();
console.log("Alphabetical Order:", places_sorted);
// Original array
console.log("Original Order:", places_originals);
// Copy of the original places array
let places_reversed = places_originals.slice();
// Sorted array in reverse alphabetical order
places_reversed.sort().reverse();
console.log("Reverse Alphabetical Order:", places_reversed);
// Original array
console.log("Original Order:", places_originals);
// Reversed original array
places_originals.reverse();
console.log("Reversed Order:", places_originals);
// Reversed original array again to restore it's original order
places_originals.reverse();
console.log("Back to Original Order:", places_originals);
// Sorted Original array
places_originals.sort();
console.log("Alphabetical Order:", places_originals);
// Sorted Original array in reverse alphabetical order
places_originals.reverse();
console.log("Reverse Alphabetical Order:", places_originals);
export {};
