var lightwall = require('./index.js');

lightwall.getRandomFile(function(path) {
  wallpaper.set(path, function (err) {
     console.log('done');
 });
})

