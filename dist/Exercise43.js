function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let great_magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians[i] = `${magicians[i]} the Great`;
    }
    return great_magicians;
}
let original_magicians = ["Harry Houdini", "Lance Burton", "Shin Lim"];
let great_magicians = make_great(original_magicians);
// Great Magicians List
show_magicians(great_magicians);
// Original Magicians List
show_magicians(original_magicians);
export {};
