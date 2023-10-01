// Exercise 41
let magicians: string[] = ["Harry Houdini", "Lance Burton", "Shin Lim"];
function show_magicians(magicians:string[]){

    for(let magician of magicians){
        console.log(magician);
    }
}
show_magicians(magicians);

// Exercise 42
function make_great(magicians:string[]){

    for(let i = 0; i < magicians.length; i++){
        magicians[i] = `${magicians[i]} the Great`;
    }
}

make_great(magicians);
// Modified magicians list
show_magicians(magicians);