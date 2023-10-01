let magicians = ["Harry Houdini", "Lance Burton", "Shin Lim"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]} the Great`;
    }
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
make_great(magicians);
// Modified magicians list
show_magicians(magicians);
export {};
