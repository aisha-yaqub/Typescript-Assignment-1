// Exercise 41
let magicians = ["Harry Houdini", "Lance Burton", "Shin Lim"];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magicians);
// Exercise 42
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]} the Great`;
    }
}
make_great(magicians);
// Modified magicians list
show_magicians(magicians);
export {};
