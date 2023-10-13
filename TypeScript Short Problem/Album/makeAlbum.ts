interface Album{
    artist: string,
    title: string,
    tracks ? : number
}

const make_album = (artist: string, title: string, tracks ?:number): Album =>{
    const album: Album = {
        artist : artist,
        title : title
    };

    if(tracks){
        album.tracks = tracks;
    }

    return album;
}

const album1 = make_album("Arjit", "Tere bin");
console.log(album1);

const album2 = make_album("Atif Aslam", "Dil tera", 5);
console.log(album2);