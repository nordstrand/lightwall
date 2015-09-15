var fs = require('fs');
require('buffertools').extend();

exports.getJpeg = getJpeg;

var headerPattern = new Buffer('ffd8', 'hex');

function getJpeg(previewFile) {
    var buf = fs.readFileSync(previewFile),
        idx = 0,
        startOfJpeg = 0;

    while( (idx = buf.indexOf(headerPattern,  idx)) != -1 ) {
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