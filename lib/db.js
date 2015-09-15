var sqlite3 = require('sqlite3').verbose(),
    glob = require('glob');

var lightRoomPath =  process.env.HOME + "/Pictures/Lightroom"
var dbFileName = lightRoomPath + "/Lightroom 5 Catalog.lrcat";

exports.getIds = getIds

function getIds(cb) {
    var db = new sqlite3.Database(dbFileName, sqlite3.OPEN_READONLY);

    var ids = [];
    db.all("select aglibraryfile.id_global, adobe_images.fileformat from adobe_images, aglibraryfile where adobe_images.rootfile = aglibraryfile.id_local and adobe_images.pick=1.0",
    function(err, rows) {
      cb(rows.map(function(r) {return r.id_global;}));
    });

    db.close();
}




