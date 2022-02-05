function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
}

function white() {
    return "#ffffff";
}

function lightGrey() {
    return "#f8f8f8";
}

function getRelativeUrlPath(theUrl) {
    var arrUrl = theUrl.split("//");

    var start = arrUrl[1].indexOf("/");
    var relUrl = arrUrl[1].substring(start);

    if (relUrl.indexOf("?") != -1) {
         relUrl = relUrl.split("?")[0];
    }
    return relUrl;
}

function randomRange(a, b) {
    return Math.round(Math.random() * (b - a)) + a;
}

//  export default randomColor;
export { randomColor, white, lightGrey, getRelativeUrlPath, randomRange }