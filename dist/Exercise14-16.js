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
// Exercise 17
console.log(`\nAppologies! Unfortunately the new table will not be available in time and I can only invite two of you now.:(\n`);
// Removing guests from the list
let removedGuest;
for (let i = 0; i <= guests.length; i++) {
    if (guests.length == 2)
        break;
    removedGuest = guests.pop();
    console.log(`Hi ${removedGuest}, Appologies! I'll not be able to invite you to the dinner. `);
}
console.log('\n');
// Invitation messages to the remaining guests on the list
for (const guest of guests) {
    console.log(`Hi ${guest}, I would like to inform you that you are still invited to the dinner!`);
}
// Removing last two guests from the list
guests.pop();
guests.pop();
// Printing the empty list
console.log(guests);
