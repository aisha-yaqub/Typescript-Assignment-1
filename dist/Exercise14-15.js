"use strict";
// Exercise 14
let guests = ['Afaf', 'Fatima', 'Asbah'];
for (const guest of guests) {
    console.log(`Hi ${guest}, I would like to invite you to dinner!`);
}
// Exercise 15
let guestWhoCantMakeIt = guests[1];
console.log(`\nUnfortunately, ${guestWhoCantMakeIt} will not be able to make it to the dinner.\n`);
// Replace the guest who can't make it with the new guest
let newGuest = 'Faiza';
guests.splice(1, 1, newGuest);
// Invitation messages with updated guests list
for (const guest of guests) {
    console.log(`Hi ${guest}, I would like to invite you to dinner!`);
}
// Exercise 16
console.log(`\nInviting more guests to the dinner as I've found a bigger table.\n`);
// Adding new guest at the beginning
guests.unshift('Azka');
// Adding new guest at the middle
guests.splice(2, 0, 'Amna');
// Adding new guest at the end
guests.push('Sara');
// Invitation messages with updated guests list
for (const guest of guests) {
    console.log(`Hi ${guest}, I would like to invite you to dinner!`);
}
