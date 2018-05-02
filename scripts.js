// MAIN VARS
var mainvideo = document.getElementById('mainvideo')
var mainvideosrc = document.getElementById('mainvidsrc')

var videothumbs = document.getElementsByClassName('thumbvideo')

for(var z = 0; z < videothumbs.length; z++) {
    var elem = videothumbs[z];
    console.log("ELEM ", elem)
    elem.onclick = function(e) {
        var newsrc = e.target.childNodes[1].src
        console.log("clicked ", newsrc);
        // alert("hello"); //DEBUG
        mainvideosrc.setAttribute('src', newsrc);
        mainvideo.appendChild(mainvideosrc);
        mainvideo.load();
        mainvideo.play();
};
}
