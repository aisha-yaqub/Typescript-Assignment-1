function make_album(artist:string, album:string, tracks?:number){

  let music_album: {artist:string, album:string, tracks?:number} = {artist, album};

    if (tracks !== undefined) {
      music_album.tracks = tracks;
    }

    return music_album;
}

let artistAlbum1 = make_album("Taylor Swift", "Midnights");
let artistAlbum2 = make_album("Adele", "30");
let artistAlbum3 = make_album("Shawn Mendes", "Wonder");
let artistAlbum4 = make_album("Astro", "All Yours", 10);

console.log(artistAlbum1);
console.log(artistAlbum2);
console.log(artistAlbum3);
console.log(artistAlbum4);