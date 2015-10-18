var fs = require('fs'),
    path = require('path')
    db = require('./lib/db'),
    previewfile = require('./lib/previewfile'),
    glob = require('glob'),
    wallpaper = require('wallpaper');

var lightRoomPath = process.env.HOME + "/Pictures/Lightroom/Lightroom 5 Catalog Previews.lrdata/"

module.exports.getRandomFile = function(cb) {
    db.getIds(function (ids) {
        var id = ids[randomInt(0, ids.length-1)];
        console.log(id);

        glob(lightRoomPath + id.slice(0, 1) + "/" + id.slice(0, 4) + "/**/" + id + "*.lrprev", function (er, files) {
            console.log(files);

            var jpegBuf = previewfile.getJpeg(files[0]);
            var filename = "wallpaper-" + randomInt(0, 1000) + ".jpg";
            fs.writeFileSync(filename, jpegBuf);
            console.log("Wrote wallpaper: " + jpegBuf.length + "b");

            cb(path.resolve(filename));
        });
    });
}

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}