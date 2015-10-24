var fs = require('fs'),
    path = require('path'),
    wallpaper = require('wallpaper'),
    lightwall = require('./index.js');


lightwall.getRandomFile(function(buf) {
    var filename = "wallpaper-" + randomInt(0, 1000) + ".jpg";
    fs.writeFileSync(filename, buf);
 
    wallpaper.set(path.resolve(filename), function (err) {
        console.log('done');
    });
})

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
