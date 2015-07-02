var filterfiles = require('./filterFilesInFolder2.js');

function printFileNames(err, list) {
    if(err) {
        throw err;
    }
    list.forEach(function(file) {
        console.log(file);
    });
}



filterfiles(process.argv[2],process.argv[3],printFileNames);
