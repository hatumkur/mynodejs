//console.log(process.argv);

var fs = require('fs');
var path = require('path');

//var exports = module.exports = {};
    
module.exports = function (dir, ext, callback){
    fs.readdir(dir, function(err, list) {
        if(err) {
            return callback(err);
        }
        var filteredList = [];
        list.forEach(function (file) {
           if(path.extname(file) === ('.' + ext)) {
                //console.log(file);
               filteredList.push(file);
            }
        });
        callback(null, filteredList);
    });
}



//filterFolderByExtension(process.argv[2], process.argv[3], printFileNames);

