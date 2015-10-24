var db = require('./lib/db'),
	previewfile = require('./lib/previewfile'),
	glob = require('glob');

var lightRoomPath = process.env.HOME + "/Pictures/Lightroom/Lightroom 5 Catalog Previews.lrdata/"

module.exports.getRandomFile = function(cb) {
	db.getIds(function (ids) {
			var id = ids[randomInt(0, ids.length-1)];
			console.log(id);

			glob(lightRoomPath + id.slice(0, 1) + "/" + id.slice(0, 4) + "/**/" + id + "*.lrprev", function (er, files) {
					console.log(files);

					var jpegBuf = previewfile.getJpeg(files[0]);
					console.log("Extracted jpeg: " + jpegBuf.length + "b");

					cb(jpegBuf);
			});
	});
}
function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
