function show_magicians(magicians:string[]){

    for(let magician of magicians){
        console.log(magician);
    }
}

function make_great(magicians:string[]):string[]{
    let great_magicians:string[] = [];

    for(let i = 0; i < magicians.length; i++){
        great_magicians[i] = `${magicians[i]} the Great`;
    }

    return great_magicians;

}

let original_magicians: string[] = ["Harry Houdini", "Lance Burton", "Shin Lim"];

let great_magicians:string[] = make_great(original_magicians);

// Great Magicians List
show_magicians(great_magicians);
// Original Magicians List
show_magicians(original_magicians);