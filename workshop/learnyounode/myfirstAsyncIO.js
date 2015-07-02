var fs = require('fs');

//console.log(process.argv);

fs.readFile(process.argv[2], function (err, data) { 
    if(err) {
        throw err;
    } else {
  var countLines = data.toString().split('\n').length - 1;
        console.log(countLines);


    }
            });


