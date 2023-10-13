var make_album = function (artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
};
var album1 = make_album("Arjit", "Tere bin");
console.log(album1);
var album2 = make_album("Atif Aslam", "Dil tera", 5);
console.log(album2);
