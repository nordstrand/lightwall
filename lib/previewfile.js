var fs = require('fs'),
    bindexOf = require('buffer-indexof');


exports.getJpeg = getJpeg;

var headerPattern = new Buffer('ffd8', 'hex');

function getJpeg(previewFile) {
    var buf = fs.readFileSync(previewFile),
        idx = 0,
        startOfJpeg = 0;

    // TODO replace with Buffer.indexOf which is available in Node 4
    while( (idx = bindexOf(buf, headerPattern,  idx)) != -1 ) {
        startOfJpeg = idx;
        idx = idx + 2;
    }
    return buf.slice(startOfJpeg)
}


/*

var jpegBuf = getJpeg('lr2.data');
fs.writeFileSync("y.jpg", jpegBuf);
console.log("Wrote. " + jpegBuf.length);

*/