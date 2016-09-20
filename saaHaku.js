function saaHaku() {
    var source = document.saahaku.source.value;
    var location = document.saahaku.location.value;
    if (source === 'ilmatieteenlaitos') {
        window.open("http://ilmatieteenlaitos.fi/saa/" + location, "_blank");
    } else {
        window.open("http://www.foreca.fi/Finland/" + location, "_blank");
    }
}
// Jasu Setälä, 2016