//console.log(process.argv);

var fs = require('fs');
var path = require('path');

/*
fs.readdir(process.argv[2], function (err, list) {
    if(err) {
        throw err;
     } else {
        for(var i = 0; i < list.length; i++ ) {
            var fileName = list[i].toString();
            if(fileName.indexOf('.' + process.argv[3]) != -1) {
                console.log(fileName);
            }
        }
    }
}); */

fs.readdir(process.argv[2], function(err, list) {
    list.forEach(function (file) {
       if(path.extname(file) === ('.' + process.argv[3])) {
            console.log(file);
        }
    });
});